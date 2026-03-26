# Perfect Home Wiki

欢迎来到 Perfect Home 的 Wiki 页面！这里是常见问题和进阶教程的集合。

## 📑 页面导航

- **[快速开始](/_wiki?q=快速开始)** - 从零搭建你的个人主页
- **[配置指南](/_wiki?q=配置指南)** - 完整的 config.json 配置说明
- **[部署教程](/_wiki?q=部署教程)** - GitHub Pages / Vercel / Netlify 部署
- **[常见问题](/_wiki?q=常见问题)** - 使用中遇到的问题解答
- **[主题定制](/_wiki?q=主题定制)** - 修改颜色、字体、背景
- **[API说明](/_wiki?q=API说明)** - 所有集成的第三方API
- **[版本历史](/_wiki?q=版本历史)** - 所有版本的更新记录

---

## 🚀 快速开始

### 环境要求
- Node.js >= 16.0
- npm >= 8.0

### 安装步骤

```bash
# 1. 克隆项目
git clone https://github.com/327261086/perfect-home.git
cd perfect-home

# 2. 安装依赖
npm install

# 3. 启动开发服务器
npm run dev

# 4. 打开浏览器访问
# http://localhost:5174
```

### 自定义配置

编辑 `public/config.json` 文件：

```json
{
  "site": {
    "title": "你的名字",
    "domain": ".yourdomain.com",
    "avatar": "👤"
  },
  "socials": [...],
  "links": [...]
}
```

保存后刷新页面即可看到变化。

---

## 🔧 配置指南

### 站点信息

| 字段 | 说明 | 示例 |
|------|------|------|
| `site.title` | 网站标题 | "home" |
| `site.domain` | 域名后缀 | ".example" |
| `site.avatar` | 头像Emoji | "👤" |
| `site.startDate` | 建站日期 | "2024-01-01" |
| `site.description.identity` | 身份 | "全栈开发者" |
| `site.description.interests` | 兴趣 | "科技爱好者 / AI" |

### 社交链接

| 字段 | 说明 | 示例 |
|------|------|------|
| `id` | 唯一标识 | "github" |
| `name` | 显示名称 | "GitHub" |
| `url` | 链接地址 | "https://github.com/xxx" |
| `icon` | 图标名称 | "github" |
| `color` | 颜色 | "#333333" |

### 可用图标

| 图标名 | 显示 | 图标名 | 显示 |
|--------|------|--------|------|
| github | ⬛ | twitter | 𝕏 |
| mail | ✉️ | link | 🔗 |
| code | 💻 | star | ⭐ |
| music | 🎵 | camera | 📷 |
| book | 📚 | rocket | 🚀 |
| heart | ❤️ | fire | 🔥 |
| user | 👤 | home | 🏠 |
| video | 📺 | — | — |

---

## 🌐 部署教程

### GitHub Pages（推荐）

1. Fork 本仓库
2. 修改 `public/config.json`
3. 在仓库 Settings → Pages → Source 选 **GitHub Actions**
4. push 后自动部署
5. 访问 `https://你的用户名.github.io/perfect-home/`

### 自定义域名

1. 在域名 DNS 添加 CNAME 记录指向 `你的用户名.github.io`
2. 仓库 Settings → Pages → Custom domain 填入域名
3. 勾选 Enforce HTTPS
4. 修改 `vite.config.js` 中 `base: '/'`

### Vercel

```bash
npm i -g vercel
vercel
```

### Netlify

```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

---

## ❓ 常见问题

### Q: 如何修改主题色？
A: 编辑 `src/styles/global.scss`：
```scss
:root {
  --primary-color: #00d4ff;
  --secondary-color: #7b2ff7;
}
```

### Q: 如何更换头像？
A: 编辑 `public/config.json` 的 `site.avatar` 字段，支持 Emoji。

### Q: 如何禁用安全防护？
A: 编辑 `public/config.json`：
```json
{
  "security": {
    "disableRightClick": false,
    "disableDevTools": false,
    "disableSourceView": false
  }
}
```

### Q: 天气/访客显示"未知"？
A: 访问者可能拒绝了浏览器定位权限，或 IP 定位 API 暂时不可用，不影响其他功能。

### Q: 如何添加新的小部件？
A: 在 `src/components/widgets/` 创建新组件，然后在 `src/views/MainRight.vue` 中导入使用。

### Q: 如何使用自定义字体？
A: 在 `index.html` 的 `<head>` 中添加字体链接，然后在 `src/styles/global.scss` 中设置 `font-family`。

### Q: 如何迁移到 iconfont 图标？
A: 参考 [docs/ICONFONT_QUICK_START.md](../docs/ICONFONT_QUICK_START.md) 指南。

### Q: 如何修改背景图片？
A: 编辑 `src/store/index.js` 中的 `defaultBgImages` 数组，替换为你的图片 URL。

---

## 📊 API 说明

| API | 用途 | 免费额度 | 官网 |
|-----|------|---------|------|
| [Open-Meteo](https://open-meteo.com/) | 天气数据 | 无限制 | open-meteo.com |
| [ipwho.is](https://ipwho.is/) | IP地理定位 | 10,000次/月 | ipwho.is |
| [ipapi.co](https://ipapi.co/) | IP定位备用 | 1,000次/天 | ipapi.co |
| [Hitokoto](https://hitokoto.cn/) | 一言 | 无限制 | hitokoto.cn |
| [Unsplash](https://unsplash.com/) | 壁纸图片 | 50次/小时 | unsplash.com |
| [Bing](https://www.bing.com/) | 每日一图 | 无限制 | bing.com |

所有 API 均免费无需认证，使用降级策略确保可用性。

---

## 🎨 主题定制

### 修改颜色

编辑 `src/styles/global.scss`：

```scss
:root {
  --primary-color: #00d4ff;      // 主色（青）
  --secondary-color: #7b2ff7;    // 副色（紫）
  --bg-card: rgba(255,255,255,0.05);  // 卡片背景
  --border: rgba(255,255,255,0.1);    // 边框颜色
}
```

### 修改字体

编辑 `index.html`，替换 HarmonyOS Sans 字体链接为你想要的 Google Font。

### 修改背景

编辑 `src/store/index.js` 中的壁纸数组：

```javascript
const defaultBgImages = ref([
  'https://your-image-url-1.jpg',
  'https://your-image-url-2.jpg'
])
```

---

## 📅 版本历史

| 版本 | 日期 | 更新内容 |
|------|------|---------|
| v1.0.2 | 2026-03-26 | 修复社交链接图标 / GitHub图标更新 / 新增英文文档 / 修复访客和天气API |
| v1.0.1 | 2026-03-26 | 新增右键提醒 / 新增顶部滚动公告栏 |
| v1.0.0 | 2026-03-26 | 初版发布 / 配置文件管理 / 安全防护 / 3D翻转卡片 |

---

## 📄 许可证

MIT License - 自由使用、修改、分发。

---

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/amazing`)
3. 提交更改 (`git commit -m '✨ Add amazing feature'`)
4. 推送分支 (`git push origin feature/amazing`)
5. 创建 Pull Request

---

**有问题？** 提交 [Issue](https://github.com/327261086/perfect-home/issues) 或查看 [文档](../docs/)。
