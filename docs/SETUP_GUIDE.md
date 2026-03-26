# Perfect Home - 详细搭建文档

## 📖 目录

1. [环境准备](#环境准备)
2. [项目安装](#项目安装)
3. [配置说明](#配置说明)
4. [开发指南](#开发指南)
5. [部署指南](#部署指南)
6. [常见问题](#常见问题)
7. [进阶配置](#进阶配置)

---

## 环境准备

### 系统要求

- **操作系统**: Windows / macOS / Linux
- **Node.js**: >= 16.0
- **npm**: >= 8.0
- **浏览器**: Chrome / Firefox / Safari / Edge (最新版本)

### 检查环境

```bash
# 检查 Node.js 版本
node --version

# 检查 npm 版本
npm --version
```

如果版本过低，请访问 [Node.js 官网](https://nodejs.org/) 下载最新版本。

---

## 项目安装

### 第一步：克隆项目

```bash
# 使用 Git 克隆
git clone https://github.com/327261086/perfect-home.git

# 进入项目目录
cd perfect-home
```

### 第二步：安装依赖

```bash
# 使用 npm 安装
npm install

# 或使用 yarn
yarn install

# 或使用 pnpm
pnpm install
```

### 第三步：启动开发服务器

```bash
# 启动开发服务器
npm run dev

# 输出示例：
# ➜  Local:   http://localhost:5174/
# ➜  Network: http://192.168.1.100:5174/
```

### 第四步：打开浏览器

访问 `http://localhost:5174` 查看项目

---

## 配置说明

### 配置文件位置

```
perfect-home/
└── public/
    └── config.json  ← 配置文件
```

### 配置文件结构

#### 1. 站点信息 (site)

```json
{
  "site": {
    "title": "home",                    // 网站标题
    "domain": ".example",               // 域名后缀
    "avatar": "👤",                     // 头像 emoji
    "startDate": "2024-01-01",          // 建站日期
    "description": {
      "identity": "全栈开发者",         // 身份
      "interests": "科技爱好者 / AI",   // 兴趣
      "showStartDate": true             // 是否显示建站日期
    }
  }
}
```

#### 2. 社交链接 (socials)

```json
{
  "socials": [
    {
      "id": "github",
      "name": "GitHub",
      "url": "https://github.com/你的用户名",
      "icon": "github",
      "color": "#333333"
    },
    {
      "id": "twitter",
      "name": "Twitter",
      "url": "https://twitter.com/你的用户名",
      "icon": "twitter",
      "color": "#1DA1F2"
    },
    {
      "id": "email",
      "name": "Email",
      "url": "mailto:你的邮箱@example.com",
      "icon": "mail",
      "color": "#EA4335"
    }
  ]
}
```

#### 3. 项目链接 (links)

```json
{
  "links": [
    {
      "id": "project1",
      "name": "Perfect Home",
      "url": "https://github.com/327261086/perfect-home",
      "icon": "github",
      "color": "#00d4ff"
    },
    {
      "id": "project2",
      "name": "我的博客",
      "url": "https://example.com",
      "icon": "link",
      "color": "#7b2ff7"
    }
  ]
}
```

#### 4. 公告栏 (announcement)

```json
{
  "announcement": {
    "enabled": true,                                    // 是否启用
    "text": "🎉 欢迎来到我的个人主页！",               // 公告文本
    "speed": 50,                                        // 滚动速度（秒）
    "backgroundColor": "rgba(0, 212, 255, 0.1)",      // 背景颜色
    "textColor": "#00d4ff"                             // 文字颜色
  }
}
```

#### 5. 安全设置 (security)

```json
{
  "security": {
    "disableRightClick": true,                         // 禁止右键
    "disableDevTools": true,                           // 禁止开发者工具
    "disableSourceView": true,                         // 禁止查看源代码
    "encryptData": true,                               // 加密数据
    "rightClickMessage": "为了浏览体验，本站禁止右键。" // 右键提醒文本
  }
}
```

### 图标列表

| 图标名 | 显示 | 用途 |
|--------|------|------|
| github | ⬛ | GitHub |
| twitter | 𝕏 | Twitter |
| mail | ✉️ | 邮件 |
| link | 🔗 | 链接 |
| code | 💻 | 代码 |
| user | 👤 | 用户 |
| home | 🏠 | 主页 |
| star | ⭐ | 星标 |
| heart | ❤️ | 心形 |
| camera | 📷 | 相机 |
| music | 🎵 | 音乐 |
| video | 📺 | 视频 |
| book | 📚 | 书籍 |
| rocket | 🚀 | 火箭 |
| fire | 🔥 | 火焰 |

---

## 开发指南

### 项目结构

```
src/
├── views/
│   ├── MainLeft.vue         # 左侧模块
│   ├── MainRight.vue        # 右侧模块
│   └── SettingsPanel.vue    # 设置面板
├── components/
│   ├── Announcement.vue     # 公告栏
│   ├── Background.vue       # 背景+粒子
│   ├── MusicPanel.vue       # 音乐播放器
│   ├── LoadingScreen.vue    # 加载屏幕
│   └── widgets/
│       ├── ClockWidget.vue
│       ├── WeatherWidget.vue
│       ├── VisitorWidget.vue
│       ├── HitokotoWidget.vue
│       ├── PomodoroWidget.vue
│       ├── NotesWidget.vue
│       ├── LinksWidget.vue
│       └── TimeProgressWidget.vue
├── utils/
│   ├── config.js            # 配置加载
│   └── security.js          # 安全防护
├── store/
│   └── index.js             # Pinia 状态管理
├── styles/
│   └── global.scss          # 全局样式
├── App.vue                  # 主应用
└── main.js                  # 入口文件
```

### 修改个人信息

#### 方式一：编辑配置文件（推荐）

1. 打开 `public/config.json`
2. 修改 `site` 对象中的信息
3. 保存文件
4. 刷新页面

#### 方式二：编辑 Vue 组件

如需修改样式或布局，编辑相应的 `.vue` 文件：

- 左侧模块: `src/views/MainLeft.vue`
- 右侧模块: `src/views/MainRight.vue`
- 设置面板: `src/views/SettingsPanel.vue`

### 添加新的小部件

1. 在 `src/components/widgets/` 创建新文件 `NewWidget.vue`
2. 编写组件代码
3. 在 `src/views/MainRight.vue` 中导入并使用
4. 在 `src/store/index.js` 中添加相关状态

---

## 部署指南

### 构建生产版本

```bash
# 构建项目
npm run build

# 输出文件在 dist/ 目录
```

### 部署到 GitHub Pages

```bash
# 部署到 GitHub Pages
npm run deploy

# 需要在 package.json 中配置 homepage 字段
```

### 部署到其他服务器

#### 方式一：使用 Vercel

```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署
vercel
```

#### 方式二：使用 Netlify

```bash
# 安装 Netlify CLI
npm i -g netlify-cli

# 部署
netlify deploy --prod --dir=dist
```

#### 方式三：手动部署

1. 运行 `npm run build` 生成 `dist` 文件夹
2. 将 `dist` 文件夹上传到服务器
3. 配置 Web 服务器（Nginx / Apache）

### Nginx 配置示例

```nginx
server {
    listen 80;
    server_name example.com;

    root /var/www/perfect-home/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # 缓存静态资源
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

---

## 常见问题

### Q1: 如何修改主题色？

A: 编辑 `src/styles/global.scss`，修改 CSS 变量：

```scss
:root {
  --primary-color: #00d4ff;    // 青色
  --secondary-color: #7b2ff7;  // 紫色
}
```

### Q2: 如何添加新的社交链接？

A: 编辑 `public/config.json`，在 `socials` 数组中添加：

```json
{
  "id": "linkedin",
  "name": "LinkedIn",
  "url": "https://linkedin.com/in/你的用户名",
  "icon": "link",
  "color": "#0077B5"
}
```

### Q3: 如何修改背景图片？

A: 编辑 `src/store/index.js`，修改 `defaultBgImages` 数组中的图片 URL。

### Q4: 如何禁用某个功能？

A: 在 `src/store/index.js` 中找到相应的状态，设置为 `false`。

### Q5: 如何修改语言？

A: 编辑 `src/store/index.js`，修改 `language` 的初始值：

```javascript
const language = ref(localStorage.getItem('language') || 'zh')  // 'zh' 或 'en'
```

### Q6: 如何添加自定义字体？

A: 在 `index.html` 的 `<head>` 中添加字体链接：

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

然后在 `src/styles/global.scss` 中使用：

```scss
body {
  font-family: 'YourFont', sans-serif;
}
```

---

## 进阶配置

### 自定义 API

#### 修改天气 API

编辑 `src/store/index.js`，修改 `fetchWeather` 函数：

```javascript
const fetchWeather = async () => {
  try {
    const res = await fetch('https://your-weather-api.com/...')
    // 处理响应
  } catch (e) {
    console.error('天气获取失败:', e)
  }
}
```

#### 修改一言 API

编辑 `src/store/index.js`，修改 `fetchHitokoto` 函数：

```javascript
const fetchHitokoto = async () => {
  try {
    const res = await fetch('https://your-quote-api.com/...')
    // 处理响应
  } catch (e) {
    console.error('一言获取失败:', e)
  }
}
```

### 添加自定义样式

在 `src/styles/global.scss` 中添加自定义样式：

```scss
// 自定义样式
.my-custom-class {
  color: #00d4ff;
  font-size: 16px;
}
```

### 使用 localStorage 持久化数据

```javascript
// 保存数据
localStorage.setItem('key', JSON.stringify(data))

// 读取数据
const data = JSON.parse(localStorage.getItem('key'))

// 删除数据
localStorage.removeItem('key')
```

---

## 🔗 相关链接

- [Vue 3 文档](https://vuejs.org/)
- [Vite 文档](https://vitejs.dev/)
- [Pinia 文档](https://pinia.vuejs.org/)
- [SCSS 文档](https://sass-lang.com/)

---

## 📞 获取帮助

- 查看 [常见问题](#常见问题)
- 阅读其他文档文件
- 提交 GitHub Issue

---

**文档版本**: v1.0.2  
**最后更新**: 2026-03-26 22:40 GMT+8
