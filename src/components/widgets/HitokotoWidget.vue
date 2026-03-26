<template>
  <div class="widget hitokoto-widget">
    <div class="widget-header">
      <span class="widget-icon">💬</span>
      <span class="widget-title">一言</span>
      <button class="refresh-btn" @click="store.fetchHitokoto">🔄</button>
    </div>
    <div class="hitokoto-content" v-if="store.hitokoto">
      <div class="hitokoto-text">"{{ store.hitokoto.text }}"</div>
      <div class="hitokoto-from">—— {{ store.hitokoto.from }}</div>
    </div>
    <div class="loading" v-else-if="store.hitokotoLoading">
      <span class="loading-text">加载中...</span>
    </div>
  </div>
</template>

<script setup>
import { mainStore } from '../../store'
const store = mainStore()
</script>

<style lang="scss" scoped>
.hitokoto-widget {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 16px;
  min-height: 140px;
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

.refresh-btn {
  margin-left: auto;
  padding: 4px 8px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 12px;
  
  &:hover {
    background: rgba(0, 212, 255, 0.2);
  }
}

.hitokoto-content {
  text-align: center;
}

.hitokoto-text {
  font-size: 0.85rem;
  line-height: 1.6;
  font-style: italic;
  background: linear-gradient(135deg, #00d4ff, #7b2ff7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hitokoto-from {
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 8px;
}

.loading {
  text-align: center;
  padding: 20px 0;
}

.loading-text {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
}
</style>