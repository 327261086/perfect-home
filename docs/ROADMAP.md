# Perfect Home 功能规划

> 📅 更新时间：2026-03-30  
> 📌 当前版本：v1.2.0

---

## ✅ 已完成功能汇总

### v1.0.x 基础功能
| 功能 | 说明 |
|------|------|
| 3D翻转卡片 | 正面站点简介 / 背面更新日志 |
| 时钟 + LED | 数字时钟 + 7段LED风格 |
| 天气组件 | 湿度 + 风速 + 动画 + 100+图标映射 |
| 访客信息 | IP定位 + 城市 + 运营商 |
| 一言 | hitokoto API |
| 番茄钟 | 25/5分钟计时 |
| 便签板 | 本地持久化 |
| 项目链接 | 自定义链接卡片 |
| 时光胶囊 | 年/月/日/周进度条 |
| 社交网格 | 社交媒体图标链接 |
| 粒子背景 | 动态粒子效果 |
| Footer版权栏 | 版权信息 |

### v1.1.0 功能扩展
| 功能 | 说明 |
|------|------|
| GitHub 贡献图 | 52周热力图 + 年度统计 + 连续天数 |
| 倒计时卡片 | 默认新年倒计时，支持自定义 |
| 5套预设主题 | 赛博朋克/落日/森林/深海/极光 |
| 配色方案选择器 | 设置面板一键切换 |
| 卡片悬浮动效 | 光泽扫过 + 上浮 + 发光 |
| 左侧黄金比例布局 | 61.8:38.2 视觉平衡 |
| CSS 变量主题系统 | --theme-* 全局变量 |
| 时钟问候语增强 | 7时段中文问候 |

### v1.2.0 刚需功能
| 功能 | 说明 |
|------|------|
| TODO 待办清单 | 添加/完成/删除/持久化/进度显示 |
| Footer 站点计时器 | 精确到秒 + 接地气随机标语 |
| 世界时钟 | 北京/东京/洛杉矶/伦敦 实时显示 |
| 快捷便签贴 | 5色分类 + 折叠/展开 + 持久化 |
| 密码保护配置编辑器 | 页面内编辑站点信息/社交/链接 |

---

## 📋 待开发功能

### 🟡 中优先级（有趣实用）

| # | 功能 | 说明 |
|---|------|------|
| 1 | **一言+古诗切换** | 一言/古诗词/英语每日一句轮播 |
| 2 | **打字机效果标语** | config.json 配置，打字机动画 |
| 3 | **粒子背景开关** | 设置中开关，移动端自动关闭 |
| 4 | **访客统计** | 累计/今日访问次数，localStorage |

### 🟢 低优先级（趣味增强）

| # | 功能 | 说明 |
|---|------|------|
| 5 | **自定义鼠标样式** | 主题色跟随光标，可开关 |
| 6 | **敏感操作二次确认** | 删除便签/链接时弹窗确认 |
| 7 | **移动端适配优化** | 响应式布局细节打磨 |

### 🔵 未来规划

| # | 功能 | 说明 |
|---|------|------|
| 8 | **音乐播放器增强** | 歌词显示 + 进度条 |
| 9 | **背景图自定义** | 上传/URL设置背景图 |
| 10 | **国际化 i18n** | 中英文切换 |

---

## 版本路线图

```
v1.0.x ✅ 基础功能
v1.1.0 ✅ GitHub贡献图 + 5套主题 + 倒计时 + 悬浮动效
v1.2.0 ✅ TODO + 世界时钟 + 快捷便签 + 密码配置编辑器 + Footer计时器
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
v1.3.0 ⏳ 一言增强 + 打字机标语 + 粒子开关 + 访客统计
v1.4.0 ⏳ 移动端优化 + 鼠标特效 + 音乐增强
v2.0.0 ⏳ 背景自定义 + 国际化
```

---

## 🛠️ 技术备忘

### 主题色系
```javascript
themes = {
  cyberpunk: { primary: '#00d4ff', secondary: '#7b2ff7' },
  sunset:    { primary: '#ff6b6b', secondary: '#ffa502' },
  forest:    { primary: '#26de81', secondary: '#20bf6b' },
  ocean:     { primary: '#4834d4', secondary: '#686de0' },
  aurora:    { primary: '#ff9ff3', secondary: '#54a0ff' }
}
```

### API 列表
| API | 地址 | 用途 |
|-----|------|------|
| 访客 | `api.ipynb.cn/api/beautify_ipinfo` | IP定位 |
| 天气 | `api.ipynb.cn/api/weather?city=` | 天气预报 |
| 一言 | `v1.hitokoto.cn` | 每日一言 |
| GitHub | `api.github.com/users/{user}/events` | 贡献数据 |

### 组件清单
```
src/components/widgets/
├── ClockWidget.vue           # 时钟 + LED + 音乐翻转
├── WeatherWidget.vue         # 天气 + 湿度/风速
├── VisitorWidget.vue         # 访客信息
├── HitokotoWidget.vue        # 一言
├── PomodoroWidget.vue        # 番茄钟
├── NotesWidget.vue           # 便签板
├── LinksWidget.vue           # 项目链接
├── CountdownWidget.vue       # 倒计时
├── GithubContribWidget.vue   # GitHub贡献图
├── TodoWidget.vue            # 待办清单
├── WorldClockWidget.vue      # 世界时钟
└── QuickNotesWidget.vue      # 快捷便签

src/components/
├── Footer.vue                # 站点计时器 + 接地气标语
└── ConfigEditor.vue          # 密码保护配置编辑器
```

### Footer 标语规则
```
<30天    → 稳稳运行、庆祝上线
30-100天 → 崩溃边缘、数据库炸了
>100天   → 骨灰级、文物级
```

### localStorage Keys
```
perfect-home-todos          # 待办清单
perfect-home-quick-notes    # 快捷便签
perfect-home-config-password # 配置编辑器密码
perfect-home-edited-config  # 编辑后的配置
perfect-home-theme          # 当前主题
```

---

*持续迭代中... 🚀*
