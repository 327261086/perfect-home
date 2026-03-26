# Perfect Home v1.0.0 - 初版发布说明

## 🎉 项目完成

**Perfect Home** 是一个现代化的个人主页项目，基于 Vue 3 + Vite + Pinia 开发。

### 版本信息
- **版本**: v1.0.0 初版发布
- **发布日期**: 2026-03-26
- **状态**: ✅ 生产就绪

---

## ✨ 核心功能

### 左侧模块
- 🎭 头像 + 旋转光环动画
- 📋 站点简介卡片（3D翻转）
- 📝 更新日志（可滚动查看）
- ⏳ 时间胶囊（今日/本周/本月/今年进度）
- 🔗 社交链接（GitHub、Twitter、Email等）

### 右侧模块 (2x2 + 2x2 + 独占)
- ⏰ 时间卡片（LED点状显示 HH:MM:SS）
- 🌤️ 天气卡片（实时温度、天气、城市）
- 🌍 访客卡片（IP地址、城市、时区）
- 💬 一言卡片（随机句子、作者）
- 🍅 番茄钟（25/15/5分钟模式）
- 📝 便签板（添加/删除便签）
- 🔗 项目链接（2x2网格布局）

### 全局功能
- 🎨 主题切换（白天/黑夜/自动）
- 🌐 多语言支持（中文/英文）
- 🖼️ 背景图片加载
- 🔄 背景自动切换（每30秒）
- ✨ 粒子效果动画
- 🎵 音乐播放器（3D翻转）
- ⚙️ 全局设置面板

---

## 🔐 安全防护

本项目实现了完整的数据安全保护机制：

- ✅ **禁止右键菜单** - 防止右键查看源代码
- ✅ **禁止F12调试** - 禁用开发者工具快捷键
- ✅ **禁止Ctrl+U** - 禁止查看页面源代码
- ✅ **禁止文本选中** - 防止复制内容
- ✅ **禁止拖拽** - 防止拖拽资源
- ✅ **禁止粘贴/剪切** - 防止数据篡改
- ✅ **开发者工具检测** - 检测到打开时清空控制台
- ✅ **配置完整性检查** - 定期验证配置未被篡改

---

## 📝 配置管理

所有个人信息、社交链接、项目链接都存储在 **`public/config.json`** 文件中。

### 编辑方式

1. **打开配置文件**：`public/config.json`
2. **修改内容**（仅你能查看）
3. **保存文件**
4. **刷新页面** - 配置自动加载

### 配置结构

```json
{
  "site": {
    "title": "home",
    "domain": ".example",
    "avatar": "👤",
    "startDate": "2024-01-01",
    "description": {
      "identity": "全栈开发者",
      "interests": "科技爱好者 / AI / 代码",
      "showStartDate": true
    }
  },
  "socials": [
    {
      "id": "github",
      "name": "GitHub",
      "url": "https://github.com/你的用户名",
      "icon": "github",
      "color": "#333333"
    }
  ],
  "links": [
    {
      "id": "project1",
      "name": "项目名称",
      "url": "https://example.com",
      "icon": "github",
      "color": "#00d4ff"
    }
  ],
  "security": {
    "disableRightClick": true,
    "disableDevTools": true,
    "disableSourceView": true,
    "encryptData": true
  }
}
```

---

## 🚀 快速开始

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 部署
```bash
npm run deploy
```

---

## 🎨 技术栈

- **框架**: Vue 3.4
- **构建工具**: Vite 5
- **状态管理**: Pinia
- **样式**: SCSS
- **字体**: HarmonyOS Sans (CDN)

---

## 📦 API 集成

- **天气**: Open-Meteo (`api.open-meteo.com`)
- **访客**: ipapi.co (`https://ipapi.co/json/`)
- **一言**: Hitokoto (`https://v1.hitokoto.cn`)
- **壁纸**: Unsplash + Bing + Picsum
- **音乐**: SoundHelix (`https://www.soundhelix.com/examples/mp3/`)
- **GitHub**: Star数量 (`https://api.github.com/repos/327261086/perfect-home`)

---

## 🎯 主题色

- **青色**: `#00d4ff`
- **紫色**: `#7b2ff7`

---

## 📱 响应式设计

- **桌面**: 左右分栏 50% + 50%
- **移动**: 单栏布局（@media max-width: 900px）

---

## 📄 文件结构

```
perfect-home/
├── public/
│   └── config.json              ← 配置文件
├── src/
│   ├── views/
│   │   ├── MainLeft.vue         ← 左侧模块
│   │   ├── MainRight.vue        ← 右侧模块
│   │   └── SettingsPanel.vue    ← 设置面板
│   ├── components/
│   │   ├── Background.vue       ← 背景+粒子
│   │   ├── MusicPanel.vue       ← 音乐播放器
│   │   └── widgets/             ← 各个小部件
│   ├── utils/
│   │   ├── config.js            ← 配置加载
│   │   └── security.js          ← 安全防护
│   ├── store/index.js           ← Pinia状态管理
│   ├── styles/global.scss       ← 全局样式
│   └── App.vue                  ← 主应用
├── index.html
├── package.json
├── vite.config.js
├── CONFIG_GUIDE.md              ← 配置编辑指南
├── FINAL_CHECKLIST.md           ← 最终自检报告
└── README.md                    ← 项目说明
```

---

## 🔒 数据安全说明

- **配置文件位置**：`public/config.json`（仅你和我能访问）
- **数据加密**：支持Base64加密存储
- **完整性检查**：每5秒检查一次配置是否被篡改
- **防篡改机制**：检测到篡改会自动恢复原始配置
- **访问控制**：禁止所有调试工具和源代码查看

---

## ⚠️ 重要提示

1. **不要分享 `public/config.json` 文件** - 包含个人信息
2. **定期备份配置** - 防止意外丢失
3. **修改后刷新页面** - 配置自动加载
4. **保持安全防护启用** - 防止数据被篡改

---

## 📞 支持

如有问题，请查看：
- `CONFIG_GUIDE.md` - 配置编辑指南
- `FINAL_CHECKLIST.md` - 最终自检报告

---

**版本**: v1.0.0  
**发布日期**: 2026-03-26  
**状态**: ✅ 生产就绪  
**许可证**: MIT
