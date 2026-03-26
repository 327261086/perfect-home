<template>
  <div class="widget weather-widget">
    <div class="widget-header">
      <span class="widget-icon">🌤️</span>
      <span class="widget-title">天气</span>
      <button class="refresh-btn" @click="store.fetchWeather">🔄</button>
    </div>
    <div class="weather-content" v-if="store.weather">
      <div class="weather-main">
        <span class="weather-icon">{{ store.weather.icon }}</span>
        <div class="weather-temp">{{ store.weather.temp }}°C</div>
      </div>
      <div class="weather-info">
        <div class="weather-text">{{ store.weather.text }}</div>
        <div class="weather-city">📍 {{ store.weather.city }}</div>
      </div>
    </div>
    <div class="loading" v-else-if="store.weatherLoading">
      <span class="loading-text">加载中...</span>
    </div>
  </div>
</template>

<script setup>
import { mainStore } from '../../store'
const store = mainStore()
</script>

<style lang="scss" scoped>
.weather-widget {
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

.weather-content {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

.weather-main {
  display: flex;
  align-items: center;
  gap: 8px;
}

.weather-icon {
  font-size: 32px;
}

.weather-temp {
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
}

.weather-info {
  flex: 1;
}

.weather-text {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.8);
}

.weather-city {
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
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