# Perfect Home v1.0.1 - 新功能说明

## 🎉 新增功能

### 1. 右键提醒 ✨
- **功能**: 用户右键点击时，顶部显示提醒消息
- **提醒内容**: "为了浏览体验，本站禁止右键。"
- **自动消失**: 2秒后自动消失
- **配置位置**: `public/config.json` 中的 `security.rightClickMessage`

### 2. 顶部滚动公告 ✨
- **功能**: 页面顶部显示滚动公告栏
- **内容**: 可自定义公告文本
- **速度**: 可调整滚动速度
- **样式**: 可自定义背景色和文字色
- **配置位置**: `public/config.json` 中的 `announcement`

---

## 📝 配置方法

### 右键提醒配置

编辑 `public/config.json`：

```json
{
  "security": {
    "disableRightClick": true,
    "rightClickMessage": "为了浏览体验，本站禁止右键。"
  }
}
```

### 公告栏配置

编辑 `public/config.json`：

```json
{
  "announcement": {
    "enabled": true,
    "text": "🎉 欢迎来到我的个人主页！Perfect Home v1.0.1 发布",
    "speed": 50,
    "backgroundColor": "rgba(0, 212, 255, 0.1)",
    "textColor": "#00d4ff"
  }
}
```

### 配置参数说明

#### announcement 对象

| 参数 | 类型 | 说明 | 默认值 |
|------|------|------|--------|
| `enabled` | boolean | 是否启用公告栏 | true |
| `text` | string | 公告文本内容 | "🎉 欢迎来到我的个人主页！" |
| `speed` | number | 滚动速度（秒） | 50 |
| `backgroundColor` | string | 背景颜色（CSS颜色值） | "rgba(0, 212, 255, 0.1)" |
| `textColor` | string | 文字颜色（CSS颜色值） | "#00d4ff" |

#### security 对象

| 参数 | 类型 | 说明 | 默认值 |
|------|------|------|--------|
| `disableRightClick` | boolean | 是否禁止右键 | true |
| `rightClickMessage` | string | 右键提醒文本 | "为了浏览体验，本站禁止右键。" |

---

## 🎨 自定义示例

### 示例1：修改公告文本

```json
{
  "announcement": {
    "enabled": true,
    "text": "📢 最新更新：Perfect Home v1.0.1 发布！",
    "speed": 50,
    "backgroundColor": "rgba(0, 212, 255, 0.1)",
    "textColor": "#00d4ff"
  }
}
```

### 示例2：加快滚动速度

```json
{
  "announcement": {
    "enabled": true,
    "text": "🎉 欢迎来到我的个人主页！",
    "speed": 30,
    "backgroundColor": "rgba(0, 212, 255, 0.1)",
    "textColor": "#00d4ff"
  }
}
```

### 示例3：修改公告栏样式

```json
{
  "announcement": {
    "enabled": true,
    "text": "🎉 欢迎来到我的个人主页！",
    "speed": 50,
    "backgroundColor": "rgba(123, 47, 247, 0.1)",
    "textColor": "#7b2ff7"
  }
}
```

### 示例4：禁用公告栏

```json
{
  "announcement": {
    "enabled": false
  }
}
```

### 示例5：修改右键提醒

```json
{
  "security": {
    "disableRightClick": true,
    "rightClickMessage": "⚠️ 右键已禁用，请使用其他方式浏览。"
  }
}
```

---

## 🔧 技术实现

### 右键提醒

- 监听 `contextmenu` 事件
- 创建浮动提醒元素
- 使用CSS动画实现滑入/滑出效果
- 2秒后自动移除

### 公告栏

- 固定定位在页面顶部
- 使用CSS `animation` 实现无缝滚动
- 支持自定义速度、颜色、背景
- 响应式设计，移动端自适应

---

## 📱 响应式设计

- **桌面**: 公告栏高度 40px，字体 14px
- **移动**: 公告栏高度 35px，字体 12px

---

## ⚙️ 修改后的步骤

1. **编辑配置文件**: `public/config.json`
2. **保存文件**
3. **刷新页面** - 配置自动加载

---

## 🎯 常见问题

### Q: 如何禁用公告栏？
A: 在 `public/config.json` 中设置 `"enabled": false`

### Q: 如何加快/减慢滚动速度？
A: 修改 `speed` 参数，数值越小滚动越快

### Q: 如何修改公告栏颜色？
A: 修改 `backgroundColor` 和 `textColor` 参数

### Q: 右键提醒可以自定义吗？
A: 可以，修改 `security.rightClickMessage` 参数

---

**版本**: v1.0.1  
**发布日期**: 2026-03-26  
**状态**: ✅ 生产就绪
