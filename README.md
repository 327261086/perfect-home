# Perfect Home v1.3.0

> 🏠 现代化个人主页 | Vue 3 + Vite + Pinia | 玻璃态设计 · 5套主题 · GitHub贡献图 · 待办清单 · 世界时钟 · 打字机标语 · iconfont图标 · 国际化i18n · 背景自定义 | JSON配置 · 零后端

[English](README_EN.md) | **中文**

![Version](https://img.shields.io/badge/version-1.3.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-production-brightgreen)

## ✨ 核心功能

### 左侧模块
- 🎭 **头像卡片** - 头像支持 Emoji/URL/Markdown，旋转光环动画
- 📋 **3D翻转卡片** - 正面站点简介 / 背面更新日志
- ⏳ **时间胶囊** - 今日/本周/本月/今年进度条
- 🔗 **社交链接** - iconfont 专业图标，支持主题色跟随

### 右侧模块
- ⏰ **时钟** - LED点状显示 + 7段中文问候语
- 🌤️ **天气** - 实时温度、湿度、风速、100+图标映射
- 🌍 **访客** - IP定位、城市、时区
- 🌐 **世界时钟** - 北京/东京/洛杉矶/伦敦实时显示
- 💬 **一言/古诗/英语** - 三种内容一键切换
- ⏱️ **倒计时** - 自定义目标日期倒计时
- 🍅 **番茄钟** - 25/15/5分钟专注模式
- 📌 **快捷便签** - 5色分类，折叠/展开
- ✅ **待办清单** - 添加/完成/删除，进度显示
- 🐙 **GitHub贡献图** - 52周热力图 + 年度统计
- 🔗 **项目链接** - iconfont图标 + GitHub Stars 显示

### 全局功能
- 🎨 **5套预设主题** - 赛博朋克/落日余晖/清新森林/深海之谜/极光幻彩
- ✍️ **打字机标语** - 顶部循环打字动画，支持自定义文案
- 🖱️ **自定义鼠标** - 主题色跟随光标，平滑延迟外圈
- ✨ **粒子背景** - 鼠标交互动画，可开关
- 🖼️ **背景图自定义** - 默认渐变/自定义URL/Unsplash随机
- 🎵 **音乐播放器** - 歌词显示/进度条/播放列表/循环模式
- ⚙️ **全局设置** - 完整配置面板
- 🔐 **密码配置编辑器** - 页面内安全编辑站点信息
- 📢 **顶部公告** - 无缝滚动公告栏，支持自定义颜色速度
- 📊 **访客统计** - 今日/累计访问次数
- 🕐 **站点计时器** - Footer精确到秒 + 接地气随机标语
- 🌏 **国际化 i18n** - 中英文双语支持
- 📱 **移动端适配** - 响应式布局，≤480px单列

### 🔐 安全防护
- ✅ 禁止右键菜单
- ✅ 禁止F12调试
- ✅ 禁止Ctrl+U查看源代码
- ✅ 开发者工具检测

---

## 🚀 快速开始

### 方式一：直接使用

1. **克隆项目**
   ```bash
   git clone https://github.com/327261086/perfect-home.git
   cd perfect-home
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动开发**
   ```bash
   npm run dev
   ```

4. **修改配置**
   
   编辑 `public/config.json` 自定义你的主页信息：
   ```json
   {
     "site": {
       "title": "你的名字",
       "domain": ".com",
       "avatar": "👤",
       "startDate": "2024-01-01"
     }
   }
   ```

5. **构建部署**
   ```bash
   npm run build
   ```
   
   部署 `dist` 文件夹到 GitHub Pages/Vercel/Netlify

### 方式二：使用配置编辑器

1. 点击右下角 ⚙️ 按钮
2. 设置密码（首次自动）
3. 在页面内编辑所有配置
4. 保存后立即生效

---

## 📁 项目结构

```
perfect-home/
├── public/
│   └── config.json          # 配置文件（所有自定义内容）
├── src/
│   ├── components/           # 组件
│   │   ├── widgets/         # 功能组件
│   │   │   ├── ClockWidget.vue
│   │   │   ├── WeatherWidget.vue
│   │   │   ├── TodoWidget.vue
│   │   │   └── ...
│   │   ├── BackgroundManager.vue
│   │   ├── MusicPlayerEnhanced.vue
│   │   └── ConfigEditor.vue
│   ├── views/               # 页面视图
│   │   ├── MainLeft.vue
│   │   ├── MainRight.vue
│   │   └── SettingsPanel.vue
│   ├── store/               # Pinia 状态管理
│   ├── utils/               # 工具函数
│   │   ├── config.js        # 配置加载
│   │   ├── i18n.js          # 国际化
│   │   └── security.js      # 安全防护
│   └── styles/              # 样式文件
│       ├── global.scss
│       └── iconfont.scss    # iconfont 图标
├── docs/                   # 文档
│   ├── SETUP_GUIDE.md      # 安装指南
│   ├── CONFIG_GUIDE.md     # 配置指南
│   └── ICONFONT_QUICK_START.md
└── package.json
```

---

## ⚙️ 配置说明

详细配置说明请查看 [配置指南](docs/CONFIG_GUIDE.md)

### 基础配置 (public/config.json)

```json
{
  "site": {
    "title": "home",
    "domain": ".example",
    "avatar": "👤",
    "startDate": "2024-01-01",
    "description": {
      "identity": "全栈开发者",
      "interests": "科技爱好者 / AI"
    },
    "typewriterLines": ["欢迎来到我的主页"],
    "countdownName": "新年倒计时",
    "countdownDate": "2027-01-01",
    "github": "你的GitHub用户名"
  },
  "socials": [...],
  "links": [...],
  "announcement": {
    "enabled": true,
    "text": "欢迎语",
    "speed": 50,
    "textColor": "#00d4ff",
    "bgColor": "rgba(0,212,255,0.1)"
  },
  "changelog": [
    { "version": "v1.3.0", "desc": "最新功能" }
  ],
  "background": {
    "type": "default",
    "customUrl": "",
    "opacity": 1,
    "blur": 0
  },
  "music": {
    "enabled": true,
    "volume": 0.5,
    "playlist": []
  }
}
```

---

## 🎨 主题系统

项目内置 5 套预设主题：

| 主题 | 配色 | 说明 |
|------|------|------|
| 赛博朋克 | #00d4ff / #7b2ff7 | 科技感强 |
| 落日余晖 | #ff6b6b / #ffa502 | 温暖色调 |
| 清新森林 | #26de81 / #20bf6b | 自然清新 |
| 深海之谜 | #4834d4 / #686de0 | 神秘深邃 |
| 极光幻彩 | #ff9ff3 / #54a0ff | 梦幻渐变 |

在设置面板中一键切换。

---

## 🌏 国际化

项目支持中英文切换。在设置面板中选择语言，偏好会被保存。

---

## 📚 文档

- [安装指南](docs/SETUP_GUIDE.md) - 详细安装步骤
- [配置指南](docs/CONFIG_GUIDE.md) - 所有配置项说明
- [iconfont 图标指南](docs/ICONFONT_QUICK_START.md) - 图标配置
- [路线图](docs/ROADMAP.md) - 开发计划
- [更新日志](docs/RELEASE_NOTES.md) - 版本历史

---

## 🛠️ 技术栈

- **Vue 3** - 渐进式 JavaScript 框架
- **Vite** - 下一代前端构建工具
- **Pinia** - Vue 状态管理
- **SCSS** - CSS 预处理器
- **iconfont** - 矢量图标库
- **CSS 变量** - 主题系统

---

## 🌐 API 服务

项目使用以下免费 API（无需认证）：

| API | 地址 | 用途 |
|-----|------|------|
| 访客信息 | api.nxvav.cn | IP定位 |
| 天气 | api.nxvav.cn | 天气预报 |
| 一言 | v1.hitokoto.cn | 每日一言 |
| 古诗 | v1.jinrishici.com | 诗词名句 |
| 英语名言 | zenquotes.io | 英文名言 |
| GitHub | api.github.com | 贡献数据 |

---

## 📄 License

MIT License - 欢迎使用和修改

---

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！
