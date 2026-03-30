<template>
  <div class="typewriter-banner" v-if="lines.length > 0">
    <span class="typewriter-text">{{ displayText }}<span class="cursor" :class="{ blink: !isTyping }">|</span></span>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { mainStore } from '../store'

const store = mainStore()

// 从 config 读取标语，fallback 默认文案
const defaultLines = [
  '欢迎来到我的主页 👋',
  '代码改变世界 🌍',
  '保持好奇，持续学习 ✨',
  '生活不止眼前的 Bug 🐛'
]

const lines = ref(
  store.config?.site?.typewriterLines || defaultLines
)

const displayText = ref('')
const isTyping = ref(true)
let currentLineIdx = 0
let charIdx = 0
let timer = null
let pauseTimer = null

const typeNext = () => {
  const line = lines.value[currentLineIdx]
  if (charIdx < line.length) {
    displayText.value += line[charIdx]
    charIdx++
    isTyping.value = true
    timer = setTimeout(typeNext, 80)
  } else {
    // 打完一行，停顿后删除
    isTyping.value = false
    pauseTimer = setTimeout(deleteText, 2000)
  }
}

const deleteText = () => {
  if (displayText.value.length > 0) {
    displayText.value = displayText.value.slice(0, -1)
    isTyping.value = true
    timer = setTimeout(deleteText, 40)
  } else {
    // 删完，切换到下一行
    currentLineIdx = (currentLineIdx + 1) % lines.value.length
    charIdx = 0
    isTyping.value = false
    timer = setTimeout(typeNext, 500)
  }
}

onMounted(() => {
  if (lines.value.length > 0) {
    timer = setTimeout(typeNext, 800)
  }
})

onUnmounted(() => {
  if (timer) clearTimeout(timer)
  if (pauseTimer) clearTimeout(pauseTimer)
})
</script>

<style lang="scss" scoped>
.typewriter-banner {
  text-align: center;
  padding: 8px 0 4px;
  pointer-events: none;
}

.typewriter-text {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.75);
  font-weight: 400;
  letter-spacing: 0.5px;
}

.cursor {
  display: inline-block;
  color: var(--theme-primary);
  font-weight: 300;
  margin-left: 1px;
  
  &.blink {
    animation: blink 1s step-end infinite;
  }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>
