<template>
  <div class="widget links-widget">
    <div class="widget-header">
      <span class="widget-icon">🔗</span>
      <span class="widget-title">项目</span>
    </div>

    <!-- 显示模式 -->
    <div class="links-grid">
      <a 
        v-for="link in store.links" 
        :key="link.id"
        :href="link.url"
        target="_blank"
        class="link-card"
        :style="{ '--link-color': link.color }"
      >
        <div class="link-icon">
          <i :class="['iconfont', getIconClass(link.icon)]"></i>
        </div>
        <div class="link-info">
          <div class="link-name">{{ link.name }}</div>
          <div class="link-url">{{ formatUrl(link.url) }}</div>
        </div>
      </a>
    </div>
    
    <!-- GitHub Star -->
    <div class="github-star">
      <a :href="githubUrl" target="_blank" class="star-btn">
        <span class="star-icon">⭐</span>
        <span class="star-text">Star</span>
        <span class="star-count" v-if="stars > 0">{{ stars }}</span>
      </a>
      <div class="author">项目作者: {{ author }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { mainStore } from '../../store'

const store = mainStore()

const author = '清风如水'
const githubUrl = 'https://github.com/327261086'
const stars = ref(0)

const formatUrl = (url) => {
  try {
    return new URL(url).hostname
  } catch {
    return url
  }
}

const getIconClass = (icon) => `icon-${icon}`

const fetchStars = async () => {
  try {
    const res = await fetch('https://api.github.com/repos/327261086/perfect-home')
    if (res.ok) {
      const data = await res.json()
      stars.value = data.stargazers_count || 0
    }
  } catch {
    stars.value = 0
  }
}

onMounted(() => {
  fetchStars()
})
</script>

<style lang="scss" scoped>
.links-widget {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 16px;
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

/* 显示模式 */
.links-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-bottom: 12px;
}

.link-card {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  transition: all 0.3s;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--link-color);
    border-radius: 10px 0 0 10px;
  }
  
  &:hover {
    transform: translateX(2px);
    border-color: var(--link-color);
  }
}

.link-icon {
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .icon {
    width: 18px;
    height: 18px;
    fill: currentColor;
  }
}

.link-info {
  flex: 1;
  min-width: 0;
}

.link-name {
  font-size: 0.8rem;
  font-weight: 600;
  color: #fff;
}

.link-url {
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.5);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.github-star {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.star-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  transition: all 0.3s;
  
  &:hover {
    background: rgba(255, 215, 0, 0.2);
    border-color: #ffd700;
  }
}

.star-icon {
  font-size: 14px;
}

.star-text {
  font-size: 0.8rem;
  color: #fff;
}

.star-count {
  font-size: 0.8rem;
  color: #ffd700;
  font-weight: 600;
}

.author {
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.5);
}
</style>