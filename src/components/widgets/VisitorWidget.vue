<template>
  <div class="widget visitor-widget">
    <div class="widget-header">
      <span class="widget-icon">🌍</span>
      <span class="widget-title">访客信息</span>
    </div>
    <div class="visitor-content" v-if="visitorData">
      <div class="visitor-item">
        <span class="label">📍 位置</span>
        <span class="value">{{ visitorData.city }}, {{ visitorData.country }}</span>
      </div>
      <div class="visitor-item">
        <span class="label">🌐 IP</span>
        <span class="value ip-value" :class="{ revealed: showIp }" 
              @mouseenter="showIp = true" @mouseleave="showIp = false">
          {{ showIp ? visitorData.ip : maskedIp }}
        </span>
      </div>
      <div class="visitor-item">
        <span class="label">🕐 时区</span>
        <span class="value">{{ visitorData.timezone }}</span>
      </div>
    </div>
    <div class="loading" v-else>
      <div class="loading-spinner"></div>
      <span>定位中...</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const visitorData = ref(null)
const showIp = ref(false)

const maskedIp = computed(() => {
  if (!visitorData.value?.ip) return '***.***.***'
  const parts = visitorData.value.ip.split('.')
  if (parts.length === 4) {
    return `${parts[0]}.***.***.${parts[3]}`
  }
  return '***.***.***'
})

const fetchVisitor = async () => {
  // 多 API 降级策略
  const apis = [
    {
      url: 'https://ipwho.is/',
      parse: (d) => ({
        ip: d.ip,
        city: d.city || '未知',
        country: d.country || '未知',
        timezone: d.timezone?.id || 'UTC'
      })
    },
    {
      url: 'https://ipapi.co/json/',
      parse: (d) => ({
        ip: d.ip,
        city: d.city || '未知',
        country: d.country_name || '未知',
        timezone: d.timezone || 'UTC'
      })
    },
    {
      url: 'http://ip-api.com/json/?lang=zh-CN',
      parse: (d) => ({
        ip: d.query,
        city: d.city || '未知',
        country: d.country || '未知',
        timezone: d.timezone || 'UTC'
      })
    }
  ]

  for (const api of apis) {
    try {
      const res = await fetch(api.url)
      if (!res.ok) continue
      const data = await res.json()
      if (!data || (data.code && data.code !== 200)) continue
      visitorData.value = api.parse(data)
      return
    } catch (e) {
      console.warn('访客API失败:', api.url, e.message)
    }
  }

  // 全部失败 - 使用浏览器时区兜底
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC'
  visitorData.value = {
    ip: '0.0.0.0',
    city: '未知',
    country: '未知',
    timezone: tz
  }
}

onMounted(() => {
  fetchVisitor()
})
</script>

<style lang="scss" scoped>
.visitor-widget {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 16px;
  min-height: 140px;
  transition: all 0.3s;
  
  &:hover {
    border-color: rgba(0, 212, 255, 0.3);
  }
}

.widget-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.widget-icon {
  font-size: 16px;
}

.widget-title {
  font-size: 0.85rem;
  font-weight: 600;
  color: #00d4ff;
}

.visitor-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.visitor-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 0;
  
  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }
}

.label {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
}

.value {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.9);
  text-align: right;
}

.ip-value {
  filter: blur(4px);
  transition: filter 0.3s;
  cursor: pointer;
  
  &.revealed {
    filter: blur(0);
  }
}

.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 20px 0;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.8rem;
}

.loading-spinner {
  width: 24px;
  height: 24px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-top-color: #00d4ff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>