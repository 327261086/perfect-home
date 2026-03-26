<template>
  <div v-if="config?.announcement?.enabled" class="announcement-bar">
    <div class="announcement-content" :style="{ color: config.announcement.textColor }">
      <div class="announcement-text">
        <span v-for="(item, index) in repeatedText" :key="index" class="announcement-item">
          {{ config.announcement.text }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { mainStore } from '../store'

const store = mainStore()

const config = computed(() => store.config)

// 重复文本以实现无缝滚动
const repeatedText = computed(() => {
  return Array(3).fill(null)
})
</script>

<style lang="scss" scoped>
.announcement-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 40px;
  background: v-bind('config?.announcement?.backgroundColor || "rgba(0, 212, 255, 0.1)"');
  border-bottom: 1px solid rgba(0, 212, 255, 0.2);
  display: flex;
  align-items: center;
  overflow: hidden;
  z-index: 999;
  backdrop-filter: blur(10px);
}

.announcement-content {
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
}

.announcement-text {
  display: flex;
  animation: scroll linear infinite;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
  
  animation-duration: v-bind('(config?.announcement?.speed || 50) + "s"');
}

.announcement-item {
  padding: 0 40px;
  display: inline-block;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-33.333%);
  }
}

/* 响应式 */
@media (max-width: 768px) {
  .announcement-bar {
    height: 35px;
  }
  
  .announcement-text {
    font-size: 12px;
  }
  
  .announcement-item {
    padding: 0 20px;
  }
}
</style>
