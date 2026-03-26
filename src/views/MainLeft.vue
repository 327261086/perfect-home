<template>
  <div class="left">
    <!-- 头像 + 域名Logo -->
    <div class="profile">
      <div class="avatar-wrapper">
        <div class="avatar-ring"></div>
        <div class="avatar">👤</div>
      </div>
      <div class="logo-text">
        <span class="main">home</span>
        <span class="sub">.example</span>
      </div>
    </div>

    <!-- 站点简介 / 全局设置 3D翻转卡片 -->
    <div class="flip-card-container">
      <div class="flip-card" :class="{ flipped: showSettings }">
        <!-- 正面：站点简介 -->
        <div class="flip-face flip-front" @click="showSettings = true">
          <div class="face-bg"></div>
          <div class="face-content">
            <div class="face-header">
              <span class="face-icon">📋</span>
              <span class="face-title">站点简介</span>
              <span class="flip-hint">⚙️</span>
            </div>
            <div class="info-list">
              <div class="info-row">
                <span class="info-label">身份</span>
                <span class="info-value">全栈开发者</span>
              </div>
              <div class="info-row">
                <span class="info-label">兴趣</span>
                <span class="info-value">科技爱好者 / AI / 代码</span>
              </div>
              <div class="info-row" v-if="store.siteStartShow">
                <span class="info-label">建站</span>
                <span class="info-value">🏠 已运行 {{ store.siteDays }} 天</span>
              </div>
            </div>
            <div class="flip-tip">点击查看全局设置 →</div>
          </div>
        </div>

        <!-- 背面：全局设置 -->
        <div class="flip-face flip-back">
          <div class="face-content settings-content">
            <!-- 左：更新日志 -->
            <div class="settings-left">
              <div class="settings-section-title">📝 更新日志</div>
              <div class="changelog-list">
                <div class="cl-item" v-for="log in changelog" :key="log.ver">
                  <span class="cl-ver">{{ log.ver }}</span>
                  <span class="cl-desc">{{ log.desc }}</span>
                </div>
              </div>
            </div>

            <!-- 右：时间胶囊 -->
            <div class="settings-right">
              <div class="capsule-header">
                <div class="settings-section-title">⏳ 时间胶囊</div>
                <button class="settings-icon-btn" @click.stop="store.setOpenState = true" title="全局设置">
                  ⚙️
                </button>
              </div>
              <div class="capsule-list">
                <div class="capsule-item" v-for="item in capsuleItems" :key="item.label">
                  <div class="capsule-label-row">
                    <span class="capsule-icon">{{ item.icon }}</span>
                    <span class="capsule-label">{{ item.label }}</span>
                    <span class="capsule-val">{{ item.val }}%</span>
                  </div>
                  <div class="capsule-bar">
                    <div class="capsule-fill" :style="{ width: item.val + '%', background: item.color }"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 返回按钮 -->
            <button class="back-btn" @click.stop="showSettings = false">← 返回</button>
          </div>
        </div>
      </div>
    </div>

    <!-- 社交链接 -->
    <div class="social-links">
      <a 
        v-for="social in store.socials" 
        :key="social.id"
        :href="social.url"
        target="_blank"
        class="social-link"
        :style="{ '--color': social.color }"
        :title="social.name"
      >
        <span class="social-icon">{{ getEmojiIcon(social.icon) }}</span>
        <span class="social-name">{{ social.name }}</span>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { mainStore } from '../store'

const store = mainStore()
const showSettings = ref(false)

const changelog = [
  { ver: 'v1.0.2', desc: '修复图标显示 / 新增英文文档' },
  { ver: 'v1.0.1', desc: '右键提醒 / 滚动公告栏' },
  { ver: 'v1.0.0', desc: '初版发布 / 安全防护' }
]

const capsuleItems = computed(() => [
  { icon: '☀️', label: '今日', val: store.dayProgress, color: 'linear-gradient(90deg,#00d4ff,#0099cc)' },
  { icon: '📅', label: '本周', val: store.weekProgress, color: 'linear-gradient(90deg,#7b2ff7,#5a1fc0)' },
  { icon: '🗓️', label: '本月', val: store.monthProgress, color: 'linear-gradient(90deg,#ff0089,#cc006e)' },
  { icon: '🎯', label: '今年', val: store.yearProgress, color: 'linear-gradient(90deg,#00d4ff,#7b2ff7)' }
])

const isIconParkIcon = (icon) => {
  return /^[a-z-]+$/.test(icon)
}

const getEmojiIcon = (icon) => {
  const emojiMap = {
    'github': '⬛',
    'twitter': '𝕏',
    'mail': '✉️',
    'email': '✉️',
    'link': '🔗',
    'code': '💻',
    'user': '👤',
    'home': '🏠',
    'star': '⭐',
    'heart': '❤️',
    'camera': '📷',
    'music': '🎵',
    'video': '📺',
    'book': '📚',
    'rocket': '🚀',
    'fire': '🔥'
  }
  return emojiMap[icon] || '🔗'
}

const addNewSocial = () => {
  store.addSocial({
    name: '新链接',
    url: 'https://example.com',
    icon: 'link',
    color: '#3b82f6'
  })
}
</script>

<style lang="scss" scoped>
.left {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  
  @media (max-width: 900px) {
    width: 100%;
    padding: 20px 0;
  }
}

.profile {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 24px;
}

.avatar-wrapper {
  position: relative;
  flex-shrink: 0;
}

.avatar-ring {
  position: absolute;
  inset: -10px;
  border: 2px solid transparent;
  border-top-color: #00d4ff;
  border-bottom-color: #7b2ff7;
  border-radius: 50%;
  animation: rotate 3s linear infinite;
}

.avatar {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00d4ff, #7b2ff7);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  box-shadow: 0 0 30px rgba(0, 212, 255, 0.5);
}

.logo-text {
  font-size: 2.2rem;
  .main { color: #00d4ff; font-weight: 700; }
  .sub { color: rgba(255,255,255,0.6); font-weight: 300; }
}

/* ===== 3D 翻转卡片 ===== */
.flip-card-container {
  margin-bottom: 24px;
  perspective: 1200px;
}

.flip-card {
  position: relative;
  width: 100%;
  transform-style: preserve-3d;
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

.flip-face {
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  backface-visibility: hidden;
}

.flip-front {
  cursor: pointer;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  
  &:hover {
    border-color: rgba(0,212,255,0.4);
    box-shadow: 0 8px 30px rgba(0,212,255,0.15);
  }
}

.flip-back {
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(10,10,20,0.9);
  border: 1px solid rgba(0,212,255,0.25);
  backdrop-filter: blur(20px);
  transform: rotateY(180deg);
}

.flip-card.flipped {
  transform: rotateY(180deg);
}

/* 正面内容 */
.face-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0,212,255,0.05) 0%, rgba(123,47,247,0.05) 100%);
  pointer-events: none;
}

.face-content {
  position: relative;
  padding: 20px;
}

.face-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  
  .face-icon { font-size: 18px; }
  .face-title { font-size: 1rem; font-weight: 600; color: #00d4ff; }
  .flip-hint { margin-left: auto; font-size: 16px; opacity: 0.5; }
}

.info-list { display: flex; flex-direction: column; gap: 12px; }

.info-row { display: flex; align-items: center; gap: 12px; }

.info-label {
  min-width: 50px;
  font-size: 0.8rem;
  color: rgba(255,255,255,0.5);
  padding: 4px 8px;
  background: rgba(255,255,255,0.05);
  border-radius: 6px;
}

.info-value {
  font-size: 0.9rem;
  color: rgba(255,255,255,0.9);
  flex: 1;
}

.flip-tip {
  margin-top: 14px;
  font-size: 0.7rem;
  color: rgba(0,212,255,0.6);
  text-align: right;
}

/* 背面内容 */
.settings-content {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  position: relative;
}

.settings-left {
  flex: 1;
  min-width: 120px;
  max-height: 160px;
  overflow-y: auto;
  padding-right: 4px;
  
  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-track { background: rgba(255,255,255,0.05); border-radius: 2px; }
  &::-webkit-scrollbar-thumb { background: rgba(0,212,255,0.4); border-radius: 2px; }
  &::-webkit-scrollbar-thumb:hover { background: rgba(0,212,255,0.6); }
}

/* 更新日志 */
.changelog-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-height: 0;
}

.cl-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.cl-ver {
  font-size: 0.65rem;
  padding: 2px 6px;
  background: rgba(0,212,255,0.15);
  border: 1px solid rgba(0,212,255,0.3);
  border-radius: 4px;
  color: #00d4ff;
  white-space: nowrap;
}

.cl-desc {
  font-size: 0.7rem;
  color: rgba(255,255,255,0.6);
}

/* 时间胶囊 */
.capsule-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.settings-icon-btn {
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: rgba(0,212,255,0.1);
  border: 1px solid rgba(0,212,255,0.3);
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    background: rgba(0,212,255,0.25);
    transform: rotate(30deg);
  }
}

.capsule-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.capsule-item {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.capsule-label-row {
  display: flex;
  align-items: center;
  gap: 6px;
  
  .capsule-icon { font-size: 12px; }
  .capsule-label { font-size: 0.72rem; color: rgba(255,255,255,0.7); flex: 1; }
  .capsule-val { font-size: 0.72rem; color: #00d4ff; font-weight: 600; }
}

.capsule-bar {
  height: 5px;
  background: rgba(255,255,255,0.08);
  border-radius: 3px;
  overflow: hidden;
}

.capsule-fill {
  height: 100%;
  border-radius: 3px;
  transition: width 0.8s ease;
}

/* 返回按钮 */
.back-btn {
  position: absolute;
  bottom: 12px;
  left: 16px;
  font-size: 0.72rem;
  color: rgba(255,255,255,0.5);
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;
  transition: all 0.3s;
  
  &:hover {
    color: #00d4ff;
    background: rgba(0,212,255,0.1);
  }
}

/* 社交链接 */
.social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 8px;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px;
  transition: all 0.3s;
  
  .icon {
    width: 18px;
    height: 18px;
    fill: currentColor;
  }
  
  .social-icon {
    font-size: 18px;
  }
  
  &:hover {
    background: var(--color);
    border-color: var(--color);
    transform: translateY(-2px);
  }
}

.social-icon { font-size: 18px; }
.social-name { font-size: 0.9rem; }

@keyframes rotate {
  to { transform: rotate(360deg); }
}
</style>