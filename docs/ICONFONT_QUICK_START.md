# iconfont 快速实现指南

## 🚀 5分钟快速上手

### 第一步：创建 iconfont 项目

1. 访问 [iconfont.cn](https://www.iconfont.cn/)
2. 登录或注册账号
3. 点击 "新建项目"
4. 项目名称: `perfect-home`
5. 项目描述: `Personal Homepage Icons`

### 第二步：添加图标

1. 在项目中点击 "添加图标"
2. 搜索并添加以下图标：
   - github
   - twitter / x
   - mail / email
   - link
   - code
   - user
   - home
   - star
   - heart
   - camera
   - music
   - video
   - book
   - rocket
   - fire

### 第三步：生成字体文件

1. 选择所有图标
2. 点击 "生成代码"
3. 选择 "Font Class" 方式
4. 复制生成的 CSS 链接

### 第四步：集成到项目

#### 在 `index.html` 中添加

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>我的主页</title>
  
  <!-- 鸿蒙字体 -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/harmonyos-font@1.0.5/dist/css/result.css">
  
  <!-- iconfont 图标库 -->
  <link rel="stylesheet" href="https://at.alicdn.com/t/font_xxxxx_xxxxx.css">
  
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body { height: 100%; font-family: 'HarmonyOS Sans', sans-serif; }
    body { background: #0a0a0f; color: #fff; }
  </style>
</head>
<body>
  <div id="app"></div>
  <script type="module" src="/src/main.js"></script>
</body>
</html>
```

#### 在 Vue 组件中使用

```vue
<!-- MainLeft.vue -->
<template>
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
      <i :class="`iconfont icon-${social.icon}`"></i>
      <span class="social-name">{{ social.name }}</span>
    </a>
  </div>
</template>

<style scoped>
.social-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px;
  transition: all 0.3s;
  
  i {
    font-size: 18px;
  }
  
  &:hover {
    background: var(--color);
    border-color: var(--color);
    transform: translateY(-2px);
  }
}

.social-name { 
  font-size: 0.9rem; 
}
</style>
```

---

## 📝 配置文件更新

### 更新 `public/config.json`

```json
{
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
  ],
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
}
```

---

## 🎨 iconfont 图标名称映射

| 功能 | iconfont 图标名 | 备用 Emoji |
|------|-----------------|-----------|
| GitHub | `github` | ⬛ |
| Twitter | `twitter` 或 `x` | 𝕏 |
| Email | `mail` 或 `email` | ✉️ |
| Link | `link` | 🔗 |
| Code | `code` | 💻 |
| User | `user` | 👤 |
| Home | `home` | 🏠 |
| Star | `star` | ⭐ |
| Heart | `heart` | ❤️ |
| Camera | `camera` | 📷 |
| Music | `music` | 🎵 |
| Video | `video` | 📺 |
| Book | `book` | 📚 |
| Rocket | `rocket` | 🚀 |
| Fire | `fire` | 🔥 |

---

## 🔧 完整实现步骤

### 步骤 1：修改 MainLeft.vue

```vue
<template>
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
      <!-- 使用 iconfont -->
      <i :class="`iconfont icon-${social.icon}`"></i>
      <span class="social-name">{{ social.name }}</span>
    </a>
  </div>
</template>
```

### 步骤 2：修改 LinksWidget.vue

```vue
<template>
  <div class="link-card">
    <div class="link-icon">
      <!-- 使用 iconfont -->
      <i :class="`iconfont icon-${link.icon}`"></i>
    </div>
    <div class="link-info">
      <div class="link-name">{{ link.name }}</div>
      <div class="link-url">{{ formatUrl(link.url) }}</div>
    </div>
  </div>
</template>

<style scoped>
.link-icon {
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  i {
    font-size: 18px;
  }
}
</style>
```

### 步骤 3：在 index.html 添加 CSS

```html
<!-- 在 <head> 中添加 -->
<link rel="stylesheet" href="https://at.alicdn.com/t/font_xxxxx_xxxxx.css">
```

### 步骤 4：测试

```bash
npm run dev
```

---

## 💡 优势对比

### Emoji 方案（当前）
```
✅ 无需加载资源
✅ 加载速度最快
✅ 完全兼容
❌ 图标选择有限
❌ 无法自定义颜色
```

### iconfont 方案（推荐）
```
✅ 图标丰富
✅ 颜色自定义
✅ 加载速度快
✅ 兼容性好
✅ 实现简单
❌ 需要上传到 iconfont.cn
❌ 需要生成字体文件
```

---

## 🎯 迁移建议

### 立即行动（v1.0.2）
- 保持 Emoji 方案
- 继续发布

### 下一版本（v1.1.0）
- 迁移到 iconfont
- 更新所有图标
- 优化视觉效果

### 长期规划
- 考虑自定义字体
- 添加更多图标
- 支持动画效果

---

## 📚 参考资源

- [iconfont.cn 官网](https://www.iconfont.cn/)
- [iconfont 使用指南](https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910403.d8cf4382a&helptype=code)
- [Font Awesome 替代方案](https://fontawesome.com/)

---

**指南完成时间**: 2026-03-26 22:37 GMT+8
