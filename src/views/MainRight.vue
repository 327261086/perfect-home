<template>
  <div class="right">
    <!-- 上方 2x2 网格 -->
    <div class="top-widgets">
      <ClockWidget />
      <WeatherWidget />
      <VisitorWidget />
      <HitokotoWidget />
    </div>
    
    <!-- 中间 2x2：番茄钟 + 便签板 -->
    <div class="middle-widgets">
      <PomodoroWidget />
      <NotesWidget v-if="store.notesEnabled" />
    </div>
    
    <!-- 底部独占：项目链接 -->
    <div class="bottom-widgets">
      <LinksWidget class="full-width" />
    </div>
  </div>
</template>

<script setup>
import { mainStore } from '../store'
import ClockWidget from '../components/widgets/ClockWidget.vue'
import WeatherWidget from '../components/widgets/WeatherWidget.vue'
import VisitorWidget from '../components/widgets/VisitorWidget.vue'
import HitokotoWidget from '../components/widgets/HitokotoWidget.vue'
import PomodoroWidget from '../components/widgets/PomodoroWidget.vue'
import LinksWidget from '../components/widgets/LinksWidget.vue'
import NotesWidget from '../components/widgets/NotesWidget.vue'

const store = mainStore()
</script>

<style lang="scss" scoped>
.right {
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 16px;
  min-height: calc(100vh - 40px);
  
  @media (max-width: 900px) {
    width: 100%;
    min-height: auto;
  }
}

// 上方 2x2 网格
.top-widgets {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
}

// 中间 2x2：番茄钟 + 便签板
.middle-widgets {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
}

// 底部独占：项目链接
.bottom-widgets {
  margin-top: auto;
  
  .full-width {
    width: 100%;
  }
}
</style>