<template>
  <div class="app" @mousemove="store.updateMouse">
    <!-- 公告栏 -->
    <Announcement />

    <!-- Loading Screen -->
    <LoadingScreen />

    <!-- Background -->
    <Background />

    <!-- Main Content -->
    <main id="main" v-if="store.imgLoadStatus">
      <div class="container">
        <!-- Left Column -->
        <MainLeft />
        <!-- Right Column -->
        <MainRight />
      </div>
      
      <!-- Mobile Menu -->
      <div class="mobile-menu" v-if="isMobile" @click="toggleMobile">
        <span>{{ mobileOpen ? '✕' : '☰' }}</span>
      </div>
    </main>

    <!-- Settings Panel -->
    <SettingsPanel v-if="store.setOpenState" />

    <!-- Music Player Panel -->
    <MusicPanel v-if="store.musicOpenState" />

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { mainStore } from './store'
import { loadConfig } from './utils/config'
import { initSecurityFeatures, initDataIntegrity } from './utils/security'
import Announcement from './components/Announcement.vue'
import LoadingScreen from './components/LoadingScreen.vue'
import Background from './components/Background.vue'
import MainLeft from './views/MainLeft.vue'
import MainRight from './views/MainRight.vue'
import SettingsPanel from './views/SettingsPanel.vue'
import MusicPanel from './components/MusicPanel.vue'
import Footer from './components/Footer.vue'

const store = mainStore()
const mobileOpen = ref(false)
const config = ref(null)

const isMobile = computed(() => store.innerWidth < 720)

const toggleMobile = () => {
  mobileOpen.value = !mobileOpen.value
}

onMounted(async () => {
  // 加载配置文件
  config.value = await loadConfig()
  
  // 初始化安全防护
  if (config.value?.security) {
    initSecurityFeatures(config.value)
    initDataIntegrity(config.value)
  }
  
  // 保存配置到store
  store.setConfig(config.value)
  
  store.setInnerWidth(window.innerWidth)
  window.addEventListener('resize', () => store.setInnerWidth(window.innerWidth))
  store.fetchVisitor()
  store.fetchWeather()
  store.fetchHitokoto()
})
</script>

<style lang="scss">
.app {
  position: relative;
  width: 100%;
  min-height: 100vh;
}

#main {
  position: relative;
  width: 100%;
  min-height: 100vh;
  transition: transform 0.3s;
  padding-top: 40px;
}

.container {
  width: 100%;
  min-height: calc(100vh - 40px);
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  gap: 20px;
  
  @media (max-width: 900px) {
    flex-direction: column;
    min-height: auto;
    padding-top: 80px;
    padding-bottom: 60px;
  }
}

.mobile-menu {
  display: none;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 40px;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  z-index: 100;
  cursor: pointer;
  
  @media (max-width: 900px) {
    display: flex;
  }
}
</style>