<template>
  <footer class="footer" :class="{ blur: store.footerBlur }">
    <!-- 歌词显示 -->
    <div class="lrc" v-if="store.playerLrcShow && store.playerLrc">
      <span class="lrc-text">{{ store.playerLrc }}</span>
    </div>
    <div class="copyright">
      <span>© {{ new Date().getFullYear() }} {{ store.siteName }}</span>
      <span class="divider">|</span>
      <span>Powered by Vue 3 + Vite</span>
    </div>
  </footer>
</template>

<script setup>
import { useMainStore } from '@/store'
const store = useMainStore()
</script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  background: rgba(26, 26, 46, 0.6);
  backdrop-filter: blur(10px);
  border-top: 1px solid $border;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: $transition;
  
  &.blur {
    backdrop-filter: blur(20px);
  }
  
  .lrc {
    font-size: 13px;
    color: $primary;
    margin-bottom: 2px;
    max-width: 400px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    animation: pulse 3s ease-in-out infinite;
  }
  
  .copyright {
    font-size: 12px;
    color: $text-light;
    
    .divider {
      margin: 0 8px;
      opacity: 0.5;
    }
  }
  
  @media (max-width: $mobile) {
    height: 60px;
    padding: 8px 16px;
  }
}
</style>
