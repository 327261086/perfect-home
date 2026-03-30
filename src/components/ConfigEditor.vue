<template>
  <div class="config-editor-overlay" @click.self="$emit('close')">
    <div class="config-editor">
      <!-- 头部 -->
      <div class="editor-header">
        <span class="editor-title">⚙️ 配置编辑器</span>
        <button class="close-btn" @click="$emit('close')">✕</button>
      </div>
      
      <!-- 未解锁状态 -->
      <div class="lock-screen" v-if="!isUnlocked">
        <div class="lock-icon">🔐</div>
        <div class="lock-text">输入密码解锁配置编辑器</div>
        <input 
          type="password" 
          v-model="inputPassword" 
          @keyup.enter="unlock"
          placeholder="请输入密码..."
          class="password-input"
        />
        <button @click="unlock" class="unlock-btn">解锁</button>
        <div class="lock-hint" v-if="error">{{ error }}</div>
        <div class="lock-hint-new" v-if="!hasPassword">
          首次使用将自动设置密码
        </div>
      </div>
      
      <!-- 已解锁状态 -->
      <div class="editor-content" v-else>
        <!-- 标签页 -->
        <div class="editor-tabs">
          <button 
            :class="{ active: activeTab === 'site' }" 
            @click="activeTab = 'site'"
          >📝 站点信息</button>
          <button 
            :class="{ active: activeTab === 'socials' }" 
            @click="activeTab = 'socials'"
          >🔗 社交链接</button>
          <button 
            :class="{ active: activeTab === 'links' }" 
            @click="activeTab = 'links'"
          >📁 项目链接</button>
        </div>
        
        <!-- 站点信息 -->
        <div class="tab-content" v-if="activeTab === 'site'">
          <div class="form-group">
            <label>站点标题</label>
            <input type="text" v-model="editConfig.site.title" />
          </div>
          <div class="form-group">
            <label>域名</label>
            <input type="text" v-model="editConfig.site.domain" />
          </div>
          <div class="form-group">
            <label>头像 Emoji</label>
            <input type="text" v-model="editConfig.site.avatar" />
          </div>
          <div class="form-group">
            <label>身份描述</label>
            <input type="text" v-model="editConfig.site.description.identity" />
          </div>
          <div class="form-group">
            <label>兴趣标签</label>
            <input type="text" v-model="editConfig.site.description.interests" />
          </div>
          <div class="form-group">
            <label>建站日期</label>
            <input type="date" v-model="editConfig.site.startDate" />
          </div>
          <div class="form-group">
            <label>倒计时名称</label>
            <input type="text" v-model="editConfig.site.countdownName" placeholder="如：新年倒计时" />
          </div>
          <div class="form-group">
            <label>倒计时日期</label>
            <input type="date" v-model="editConfig.site.countdownDate" />
          </div>
        </div>
        
        <!-- 社交链接 -->
        <div class="tab-content" v-if="activeTab === 'socials'">
          <div class="link-list">
            <div class="link-item" v-for="(s, i) in editConfig.socials" :key="i">
              <input type="text" v-model="s.name" placeholder="名称" class="link-name" />
              <input type="text" v-model="s.url" placeholder="URL" class="link-url" />
              <input type="text" v-model="s.icon" placeholder="图标" class="link-icon" />
              <input type="color" v-model="s.color" class="link-color" />
              <button @click="delSocial(i)" class="del-btn">🗑️</button>
            </div>
          </div>
          <button @click="addSocial" class="add-item-btn">+ 添加社交链接</button>
        </div>
        
        <!-- 项目链接 -->
        <div class="tab-content" v-if="activeTab === 'links'">
          <div class="link-list">
            <div class="link-item" v-for="(l, i) in editConfig.links" :key="i">
              <input type="text" v-model="l.name" placeholder="名称" class="link-name" />
              <input type="text" v-model="l.url" placeholder="URL" class="link-url" />
              <input type="text" v-model="l.icon" placeholder="图标" class="link-icon" />
              <input type="color" v-model="l.color" class="link-color" />
              <button @click="delLink(i)" class="del-btn">🗑️</button>
            </div>
          </div>
          <button @click="addLink" class="add-item-btn">+ 添加项目链接</button>
        </div>
        
        <!-- 底部操作 -->
        <div class="editor-footer">
          <button @click="changePassword" class="change-pwd-btn">🔑 修改密码</button>
          <div class="footer-right">
            <button @click="$emit('close')" class="cancel-btn">取消</button>
            <button @click="saveConfig" class="save-btn">💾 保存</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { mainStore } from '../store'

const emit = defineEmits(['close'])
const store = mainStore()

const isUnlocked = ref(false)
const inputPassword = ref('')
const error = ref('')
const hasPassword = ref(false)
const activeTab = ref('site')

const PASSWORD_KEY = 'perfect-home-config-password'
const CONFIG_KEY = 'perfect-home-edited-config'

// 编辑配置
const editConfig = reactive({
  site: {
    title: 'home',
    domain: '.example',
    avatar: '👤',
    startDate: '2024-01-01',
    description: {
      identity: '全栈开发者',
      interests: '科技 / AI / 代码',
      showStartDate: true
    },
    countdownName: '新年倒计时',
    countdownDate: '2027-01-01'
  },
  socials: [],
  links: []
})

onMounted(() => {
  // 检查是否有密码
  hasPassword.value = !!localStorage.getItem(PASSWORD_KEY)
  
  // 加载已编辑的配置
  try {
    const saved = localStorage.getItem(CONFIG_KEY)
    if (saved) {
      const data = JSON.parse(saved)
      Object.assign(editConfig.site, data.site || {})
      editConfig.socials = data.socials || store.socials || []
      editConfig.links = data.links || store.links || []
    } else if (store.config?.site) {
      Object.assign(editConfig.site, store.config.site)
      editConfig.socials = store.socials || []
      editConfig.links = store.links || []
    }
  } catch (e) {
    console.warn('加载配置失败:', e)
  }
})

const unlock = () => {
  const savedPassword = localStorage.getItem(PASSWORD_KEY)
  
  if (!savedPassword) {
    // 首次设置密码
    if (inputPassword.value.length < 4) {
      error.value = '密码至少4位'
      return
    }
    localStorage.setItem(PASSWORD_KEY, inputPassword.value)
    isUnlocked.value = true
    error.value = ''
  } else {
    // 验证密码
    if (inputPassword.value === savedPassword) {
      isUnlocked.value = true
      error.value = ''
    } else {
      error.value = '密码错误'
    }
  }
}

const changePassword = () => {
  const oldPwd = prompt('请输入旧密码：')
  if (oldPwd !== localStorage.getItem(PASSWORD_KEY)) {
    alert('旧密码错误')
    return
  }
  const newPwd = prompt('请输入新密码（至少4位）：')
  if (newPwd && newPwd.length >= 4) {
    localStorage.setItem(PASSWORD_KEY, newPwd)
    alert('密码修改成功')
  }
}

const addSocial = () => {
  editConfig.socials.push({ id: Date.now(), name: '', url: '', icon: 'link', color: '#00d4ff' })
}

const delSocial = (i) => {
  editConfig.socials.splice(i, 1)
}

const addLink = () => {
  editConfig.links.push({ id: Date.now(), name: '', url: '', icon: 'folder', color: '#00d4ff' })
}

const delLink = (i) => {
  editConfig.links.splice(i, 1)
}

const saveConfig = () => {
  // 保存到 localStorage
  localStorage.setItem(CONFIG_KEY, JSON.stringify({
    site: editConfig.site,
    socials: editConfig.socials,
    links: editConfig.links
  }))
  
  // 应用到 store
  store.setConfig({ ...store.config, site: editConfig.site })
  
  // 更新社交链接和项目链接
  if (editConfig.socials.length) {
    editConfig.socials.forEach(s => store.addSocial(s))
  }
  if (editConfig.links.length) {
    editConfig.links.forEach(l => store.addLink(l))
  }
  
  alert('配置已保存！')
  emit('close')
}
</script>

<style lang="scss" scoped>
.config-editor-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
}

.config-editor {
  width: 90%;
  max-width: 600px;
  max-height: 80vh;
  background: rgba(20, 20, 40, 0.95);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.editor-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.editor-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--theme-primary);
}

.close-btn {
  width: 32px;
  height: 32px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  
  &:hover {
    background: rgba(255, 0, 100, 0.3);
  }
}

// 锁屏
.lock-screen {
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.lock-icon { font-size: 48px; }

.lock-text {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
}

.password-input {
  width: 100%;
  max-width: 300px;
  padding: 12px 16px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  color: #fff;
  font-size: 1rem;
  text-align: center;
  
  &:focus {
    border-color: var(--theme-primary);
    outline: none;
  }
}

.unlock-btn {
  padding: 12px 40px;
  background: var(--theme-gradient);
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.05);
  }
}

.lock-hint {
  color: #ff6490;
  font-size: 0.85rem;
}

.lock-hint-new {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.85rem;
}

// 编辑内容
.editor-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.editor-tabs {
  display: flex;
  gap: 8px;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  button {
    padding: 8px 16px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.85rem;
    cursor: pointer;
    transition: all 0.3s;
    
    &:hover {
      background: rgba(0, 212, 255, 0.1);
    }
    
    &.active {
      background: rgba(0, 212, 255, 0.2);
      border-color: var(--theme-primary);
      color: var(--theme-primary);
    }
  }
}

.tab-content {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  
  &::-webkit-scrollbar { width: 6px; }
  &::-webkit-scrollbar-track { background: rgba(255,255,255,0.05); }
  &::-webkit-scrollbar-thumb { background: rgba(0,212,255,0.4); border-radius: 3px; }
}

.form-group {
  margin-bottom: 16px;
  
  label {
    display: block;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 6px;
  }
  
  input {
    width: 100%;
    padding: 10px 12px;
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    color: #fff;
    font-size: 0.9rem;
    
    &:focus {
      border-color: var(--theme-primary);
      outline: none;
    }
  }
}

.link-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 12px;
}

.link-item {
  display: flex;
  gap: 8px;
  align-items: center;
}

.link-name { width: 100px; }
.link-url { flex: 1; }
.link-icon { width: 70px; }
.link-color { width: 40px; height: 32px; border: none; cursor: pointer; }

.del-btn {
  width: 32px;
  height: 32px;
  background: rgba(255, 0, 100, 0.2);
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  
  &:hover {
    background: rgba(255, 0, 100, 0.4);
  }
}

.add-item-btn {
  width: 100%;
  padding: 10px;
  background: rgba(0, 212, 255, 0.1);
  border: 1px dashed rgba(0, 212, 255, 0.3);
  border-radius: 8px;
  color: var(--theme-primary);
  font-size: 0.85rem;
  cursor: pointer;
  
  &:hover {
    background: rgba(0, 212, 255, 0.2);
  }
}

.editor-footer {
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.change-pwd-btn {
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.85rem;
  cursor: pointer;
  
  &:hover {
    background: rgba(0, 212, 255, 0.1);
  }
}

.footer-right {
  display: flex;
  gap: 8px;
}

.cancel-btn {
  padding: 8px 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.85rem;
  cursor: pointer;
}

.save-btn {
  padding: 8px 24px;
  background: var(--theme-gradient);
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 0.85rem;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.05);
  }
}
</style>
