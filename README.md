# Perfect Home v1.0.2

> 🏠 现代化个人主页 | Vue 3 + Vite + Pinia | 玻璃态设计 · 3D翻转 · 主题切换 · 番茄钟 · 天气 · 一言 | JSON配置 · 零后端

[English](README_EN.md) | **中文**

![Version](https://img.shields.io/badge/version-1.0.2-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-production-brightgreen)

## ✨ 核心功能

### 左侧模块
- 🎭 **头像** - 旋转光环动画
- 📋 **站点简介** - 3D翻转卡片
- 📝 **更新日志** - 可滚动查看版本历史
- ⏳ **时间胶囊** - 今日/本周/本月/今年进度条
- 🔗 **社交链接** - GitHub、Twitter、Email等

### 右侧模块 (2x2 + 2x2 + 独占)
- ⏰ **时间卡片** - LED点状显示 HH:MM:SS
- 🌤️ **天气卡片** - 实时温度、天气、城市
- 🌍 **访客卡片** - IP地址、城市、时区
- 💬 **一言卡片** - 随机句子、作者
- 🍅 **番茄钟** - 25/15/5分钟模式
- 📝 **便签板** - 添加/删除便签
- 🔗 **项目链接** - 2x2网格布局

### 全局功能
- 🎨 **主题切换** - 白天/黑夜/自动
- 🌐 **多语言** - 中文/英文
- 🖼️ **背景图片** - 多种来源
- 🔄 **自动切换** - 每30秒更新背景
- ✨ **粒子效果** - 鼠标交互动画
- 🎵 **音乐播放器** - 3D翻转效果
- ⚙️ **全局设置** - 完整配置面板
- 📢 **顶部公告** - 无缝滚动公告栏
- ⚠️ **右键提醒** - 禁止右键提示

### 🔐 安全防护
- ✅ 禁止右键菜单
- ✅ 禁止F12调试
- ✅ 禁止Ctrl+U查看源代码
- ✅ 禁止文本选中/复制/粘贴
- ✅ 禁止拖拽
- ✅ 开发者工具检测
- ✅ 配置完整性检查
- ✅ 自动恢复被篡改配置

---

## 🚀 快速开始

### 环境要求
- Node.js >= 16.0
- npm >= 8.0

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
```

访问 `http://localhost:5174`

### 构建生产版本
```bash
npm run build
```

### 部署
```bash
npm run deploy
```

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
  "announcement": {
    "enabled": true,
    "text": "🎉 欢迎来到我的个人主页！",
    "speed": 50,
    "backgroundColor": "rgba(0, 212, 255, 0.1)",
    "textColor": "#00d4ff"
  },
  "security": {
    "disableRightClick": true,
    "disableDevTools": true,
    "disableSourceView": true,
    "encryptData": true,
    "rightClickMessage": "为了浏览体验，本站禁止右键。"
  }
}
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

## 📁 项目结构

```
perfect-home/
├── public/
│   └── config.json              ← 配置文件（仅你能查看）
├── src/
│   ├── views/
│   │   ├── MainLeft.vue         ← 左侧模块
│   │   ├── MainRight.vue        ← 右侧模块
│   │   └── SettingsPanel.vue    ← 设置面板
│   ├── components/
│   │   ├── Announcement.vue     ← 公告栏
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
└── README.md
```

---

## 📚 文档

| 文档 | 说明 |
|------|------|
| 📖 [搭建教程](docs/SETUP_GUIDE.md) | 详细安装、配置、部署指南 |
| 🔧 [配置指南](docs/CONFIG_GUIDE.md) | config.json 完整配置说明 |
| 📢 [公告配置](docs/ANNOUNCEMENT_GUIDE.md) | 公告栏和右键提醒配置 |
| 🎨 [iconfont迁移](docs/ICONFONT_QUICK_START.md) | 图标升级指南 |
| 📝 [发布说明](docs/RELEASE_NOTES.md) | 版本更新日志 |
| 🌐 [English Setup Guide](docs/SETUP_GUIDE_EN.md) | English Documentation |
| 🌐 [English Config Guide](docs/CONFIG_GUIDE_EN.md) | English Configuration |
| 📖 [Wiki](https://github.com/327261086/perfect-home/wiki) | 常见问题和进阶教程 |

---

## 🔐 数据安全

- ✅ 所有个人信息存储在 `public/config.json`
- ✅ 仅你能查看
- ✅ 禁止所有调试工具
- ✅ 配置完整性检查（每5秒）
- ✅ 自动恢复被篡改配置

---

## 📊 版本历史

| 版本 | 发布日期 | 内容 |
|------|---------|------|
| v1.0.2 | 2026-03-26 | 修复社交链接图标显示/GitHub图标更新 |
| v1.0.1 | 2026-03-26 | 右键提醒/顶部滚动公告 |
| v1.0.0 | 2026-03-26 | 初版发布/配置文件管理/安全防护 |

---

## 🎓 常见问题

### Q: 如何修改个人信息？
A: 编辑 `public/config.json` 中的 `site` 对象，刷新页面即可。

### Q: 如何添加社交链接？
A: 编辑 `public/config.json` 中的 `socials` 数组，添加新的社交链接对象。

### Q: 如何修改项目链接？
A: 编辑 `public/config.json` 中的 `links` 数组，添加或修改项目链接。

### Q: 如何修改公告内容？
A: 编辑 `public/config.json` 中的 `announcement.text` 字段。

### Q: 如何禁用右键提醒？
A: 编辑 `public/config.json` 中的 `security.disableRightClick` 为 `false`。

### Q: 如何修改主题色？
A: 编辑 `src/styles/global.scss` 中的 CSS 变量。

---

## ⚠️ 重要提示

1. **不要分享 `public/config.json` 文件** - 包含个人信息
2. **定期备份配置** - 防止意外丢失
3. **修改后刷新页面** - 配置自动加载
4. **保持安全防护启用** - 防止数据被篡改

---

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

## 📄 许可证

MIT License - 详见 LICENSE 文件

---

## 👨‍💻 作者

**清风如水**

- GitHub: [@327261086](https://github.com/327261086)
- 项目: [Perfect Home](https://github.com/327261086/perfect-home)

---

## 🙏 致谢

感谢以下开源项目和服务：

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Pinia](https://pinia.vuejs.org/)
- [Open-Meteo](https://open-meteo.com/)
- [Hitokoto](https://hitokoto.cn/)
- [ipapi.co](https://ipapi.co/)

---

## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=327261086/perfect-home&type=Date)](https://star-history.com/#327261086/perfect-home&Date)

---

**版本**: v1.0.2  
**发布日期**: 2026-03-26  
**状态**: ✅ 生产就绪
