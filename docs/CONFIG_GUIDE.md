# Perfect Home v1.0.0 - 配置指南

## 🔒 安全特性

本项目实现了完整的数据安全保护机制：

### 已启用的安全防护

- ✅ **禁止右键菜单** - 防止右键查看源代码
- ✅ **禁止F12调试** - 禁用开发者工具快捷键
- ✅ **禁止Ctrl+U** - 禁止查看页面源代码
- ✅ **禁止文本选中** - 防止复制内容
- ✅ **禁止拖拽** - 防止拖拽资源
- ✅ **禁止粘贴/剪切** - 防止数据篡改
- ✅ **开发者工具检测** - 检测到打开时清空控制台
- ✅ **配置完整性检查** - 定期验证配置未被篡改

---

## 📝 配置文件编辑

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
    "title": "home",                    // 网站标题
    "domain": ".example",               // 域名后缀
    "avatar": "👤",                     // 头像emoji
    "startDate": "2024-01-01",          // 建站日期
    "description": {
      "identity": "全栈开发者",         // 身份
      "interests": "科技爱好者 / AI",   // 兴趣
      "showStartDate": true             // 是否显示建站日期
    }
  },
  "socials": [
    {
      "id": "github",
      "name": "GitHub",
      "url": "https://github.com/你的用户名",
      "icon": "github",                 // IconPark图标名或emoji
      "color": "#333333"                // 链接颜色
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
    "disableRightClick": true,          // 禁止右键
    "disableDevTools": true,            // 禁止开发者工具
    "disableSourceView": true,          // 禁止查看源代码
    "encryptData": true                 // 加密数据
  }
}
```

---

## 🎨 常用图标

### IconPark 图标名

- `github` - GitHub
- `twitter` - Twitter
- `mail` - 邮件
- `link` - 链接
- `code` - 代码
- `user` - 用户
- `home` - 主页
- `star` - 星标
- `heart` - 心形
- `camera` - 相机
- `music` - 音乐
- `video` - 视频
- `book` - 书籍
- `rocket` - 火箭
- `fire` - 火焰

### Emoji 备用

如果图标不显示，系统会自动使用对应的 Emoji：

```
github → 🐙
twitter → 🐦
mail → 📧
link → 🔗
code → 💻
user → 👤
home → 🏠
star → ⭐
heart → ❤️
camera → 📷
music → 🎵
video → 📺
book → 📚
rocket → 🚀
fire → 🔥
```

---

## 📋 编辑示例

### 修改社交链接

```json
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
```

### 修改项目链接

```json
"links": [
  {
    "id": "project1",
    "name": "Perfect Home",
    "url": "https://github.com/你的用户名/perfect-home",
    "icon": "github",
    "color": "#00d4ff"
  },
  {
    "id": "project2",
    "name": "我的博客",
    "url": "https://你的博客.com",
    "icon": "link",
    "color": "#7b2ff7"
  }
]
```

### 修改建站日期

```json
"site": {
  "startDate": "2024-03-26",  // 改为你的建站日期
  "description": {
    "showStartDate": true     // 设为false隐藏建站日期
  }
}
```

---

## 🔐 数据安全说明

- **配置文件位置**：`public/config.json`（仅你和我能访问）
- **数据加密**：支持Base64加密存储
- **完整性检查**：每5秒检查一次配置是否被篡改
- **防篡改机制**：检测到篡改会自动恢复原始配置
- **访问控制**：禁止所有调试工具和源代码查看

---

## 🚀 部署

```bash
# 开发
npm run dev

# 构建
npm run build

# 部署
npm run deploy
```

---

## ⚠️ 重要提示

1. **不要分享 `public/config.json` 文件** - 包含个人信息
2. **定期备份配置** - 防止意外丢失
3. **修改后刷新页面** - 配置自动加载
4. **保持安全防护启用** - 防止数据被篡改

---

**版本**: v1.0.0  
**最后更新**: 2026-03-26  
**状态**: ✅ 生产就绪
