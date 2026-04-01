# Perfect Home v1.3.0 - 配置指南

> 📅 更新时间：2026-04-01  
> 📌 当前版本：v1.3.0

---

## 📝 配置文件位置

所有配置都在 **`public/config.json`** 文件中。

### 编辑方式

**方式一：直接编辑文件**
1. 打开 `public/config.json`
2. 修改对应配置
3. 保存并刷新页面

**方式二：使用配置编辑器（推荐）**
1. 点击右下角 ⚙️ 按钮
2. 输入密码解锁（首次自动设置密码）
3. 在页面内编辑所有配置
4. 保存后立即生效，刷新不丢失

---

## 📋 完整配置结构

```json
{
  "site": { ... },
  "socials": [...],
  "links": [...],
  "announcement": { ... },
  "security": { ... },
  "changelog": [...],
  "background": { ... },
  "music": { ... }
}
```

---

## 🏠 site - 站点信息

```json
"site": {
  "title": "home",
  "domain": ".example",
  "avatar": "👤",
  "startDate": "2024-01-01",
  "description": {
    "identity": "全栈开发者",
    "interests": "科技爱好者 / AI / 代码",
    "showStartDate": true
  },
  "typewriterLines": [
    "欢迎来到我的主页 👋",
    "代码改变世界 🌍",
    "保持好奇，持续学习 ✨"
  ],
  "countdownName": "新年倒计时",
  "countdownDate": "2027-01-01",
  "github": "你的GitHub用户名"
}
```

| 字段 | 类型 | 说明 |
|------|------|------|
| title | string | 浏览器标签标题 + 主标题 |
| domain | string | 域名后缀，如 `.com` |
| avatar | string | 头像：支持 Emoji/URL/Markdown `![](url)` |
| startDate | string | 建站日期，格式 `YYYY-MM-DD` |
| identity | string | 身份描述 |
| interests | string | 兴趣标签 |
| showStartDate | boolean | 是否在翻转卡片显示建站日期 |
| typewriterLines | array | 打字机标语，每行一句 |
| countdownName | string | 倒计时名称 |
| countdownDate | string | 倒计时目标日期 |
| github | string | GitHub 用户名 |

### 头像格式示例

```json
"avatar": "👤"
"avatar": "https://avatars.githubusercontent.com/u/327261086"
"avatar": "![avatar](https://example.com/photo.jpg)"
```

---

## 🔗 socials - 社交链接

```json
"socials": [
  {
    "id": "github",
    "name": "GitHub",
    "url": "https://github.com/327261086",
    "icon": "github",
    "color": "#333333"
  },
  {
    "id": "twitter",
    "name": "Twitter",
    "url": "https://twitter.com",
    "icon": "twitter",
    "color": "#1DA1F2"
  },
  {
    "id": "email",
    "name": "Email",
    "url": "mailto:example@example.com",
    "icon": "mail",
    "color": "#EA4335"
  }
]
```

| 字段 | 类型 | 说明 |
|------|------|------|
| id | string | 唯一标识符 |
| name | string | 显示名称 |
| url | string | 链接地址 |
| icon | string | 图标名称（对应 iconfont 图标） |
| color | string | 图标颜色，十六进制格式 |

---

## 🔗 links - 项目链接

```json
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
    "name": "My Blog",
    "url": "https://example.com",
    "icon": "link",
    "color": "#7b2ff7"
  }
]
```

---

## 📢 announcement - 顶部公告

```json
"announcement": {
  "enabled": true,
  "text": "🎉 欢迎来到我的个人主页！",
  "speed": 50,
  "textColor": "#00d4ff",
  "bgColor": "rgba(0, 212, 255, 0.1)"
}
```

| 字段 | 类型 | 说明 |
|------|------|------|
| enabled | boolean | 是否显示公告栏 |
| text | string | 公告内容文字 |
| speed | number | 滚动速度，秒数（越小越快） |
| textColor | string | 文字颜色 |
| bgColor | string | 背景颜色，支持 rgba 格式 |

---

## 📝 changelog - 更新日志

```json
"changelog": [
  { "version": "v1.3.0", "desc": "iconfont图标/国际化i18n/背景自定义" },
  { "version": "v1.2.0", "desc": "待办/便签/编辑器/公告" },
  { "version": "v1.1.0", "desc": "GitHub贡献图/5套主题" },
  { "version": "v1.0.0", "desc": "初版发布" }
]
```

---

## 🖼️ background - 背景设置

```json
"background": {
  "type": "default",
  "customUrl": "",
  "opacity": 1,
  "blur": 0
}
```

| 字段 | 类型 | 说明 |
|------|------|------|
| type | string | `default` 默认渐变 / `custom` 自定义图片 / `unsplash` 随机图片 |
| customUrl | string | 自定义图片 URL |
| opacity | number | 不透明度，0-1 |
| blur | number | 模糊度，0-20 像素 |

---

## 🎵 music - 音乐播放器

```json
"music": {
  "enabled": true,
  "autoPlay": false,
  "volume": 0.5,
  "playlist": [
    {
      "name": "歌曲名称",
      "artist": "艺术家",
      "url": "音乐文件URL",
      "cover": "封面图URL",
      "lyrics": "歌词（逐行用 | 分隔）"
    }
  ]
}
```

| 字段 | 类型 | 说明 |
|------|------|------|
| enabled | boolean | 是否启用音乐功能 |
| autoPlay | boolean | 是否自动播放 |
| volume | number | 音量，0-1 |
| playlist | array | 播放列表 |

---

## 🔐 security - 安全设置

```json
"security": {
  "disableRightClick": true,
  "disableDevTools": true,
  "disableSourceView": true,
  "encryptData": true,
  "rightClickMessage": "为了浏览体验，站禁止右键。"
}
```

| 字段 | 类型 | 说明 |
|------|------|------|
| disableRightClick | boolean | 禁止右键菜单 |
| disableDevTools | boolean | 禁止开发者工具 |
| disableSourceView | boolean | 禁止查看源代码 |
| encryptData | boolean | 启用数据加密 |
| rightClickMessage | string | 右键拦截提示 |

---

## 🎨 图标系统（iconfont）

项目使用 iconfont 图标库。每个图标由 `icon-` + 名称组成。

### 可用图标

| 图标名 | 说明 |
|--------|------|
| github | GitHub |
| twitter | Twitter |
| mail | 邮箱 |
| link | 链接 |
| code | 代码 |
| user | 用户 |
| home | 主页 |
| star | 星星 |
| heart | 心形 |
| camera | 相机 |
| music | 音乐 |
| video | 视频 |
| book | 书籍 |
| rocket | 火箭 |
| fire | 火焰 |
| bilibili | B站 |
| telegram | Telegram |
| youtube | YouTube |
| gitee | Gitee |
| folder | 文件夹 |

### 使用示例

```json
"icon": "github"
```

渲染为 `<i class="iconfont icon-github"></i>`

详细图标配置请查看 [iconfont 快速指南](ICONFONT_QUICK_START.md)

---

## 🌏 国际化

项目内置中英文支持。通过设置面板切换语言。

### 手动配置

在 `src/utils/i18n.js` 中编辑翻译文本：

```javascript
export const messages = {
  zh: {
    home: '主页',
    settings: '设置'
  },
  en: {
    home: 'Home',
    settings: 'Settings'
  }
}
```

---

## 💾 数据存储

| 存储位置 | 内容 |
|----------|------|
| public/config.json | 静态配置文件 |
| localStorage | 用户编辑配置、主题、便签、待办、统计数据 |

---

## ⚠️ 注意事项

1. **config.json 修改后需要重新构建**：`npm run build`
2. **配置编辑器修改实时生效**，保存在 localStorage
3. **页面刷新不丢失**：编辑配置会自动同步到 localStorage
4. **主题保存在 localStorage**：切换主题不会影响其他设置
5. **API 需要网络**：天气、访客等信息需要联网获取

---

## 🔧 故障排除

### 配置不生效
- 确认 JSON 格式正确（可使用 JSON 验证器）
- 重新构建项目：`npm run build`

### 图标不显示
- 确认 iconfont CDN 可访问
- 检查图标名称是否正确

### 数据丢失
- 检查 localStorage 是否被清理
- 重要配置建议同时修改 config.json 文件

---

**配置完成！** 如有问题请提交 Issue。
