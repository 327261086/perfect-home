# Perfect Home 功能规划

> 📅 更新时间：2026-04-01  
> 📌 当前版本：v1.3.0

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
| 密码保护配置编辑器 | 页面内编辑站点信息/社交/链接/公告 |
| 一言+古诗+英语 | 三源切换轮播 |
| 打字机效果标语 | 顶部循环动画，响应式读取配置 |
| 粒子背景开关 | 设置面板开关，响应式同步 |
| 访客统计 | 今日/累计PV，localStorage持久化 |
| 自定义鼠标特效 | 主题色跟随，可开关 |
| 浏览器标签标题同步 | 修改站点名称实时更新 |
| 配置持久化 | ConfigEditor保存后刷新不丢失 |
| PC/移动端数据同步 | localStorage统一管理 |

### v1.3.0 体验升级
| 功能 | 说明 |
|------|------|
| iconfont 图标库 | 专业矢量图标，主题色跟随 |
| 国际化 i18n | 中英文双语支持 |
| 背景图自定义 | 默认/自定义URL/Unsplash随机 |
| 音乐播放器增强 | 歌词/进度条/播放列表/循环模式 |

---

## 📋 待开发功能

### 🟡 中优先级

| # | 功能 | 说明 |
|---|------|------|
| 1 | **敏感操作二次确认** | 删除便签/链接时弹窗确认 |
| 2 | **便签分类标签** | 支持自定义分类 |
| 3 | **主题色自定义** | 用户自定义主题色 |

### 🟢 低优先级（趣味增强）

| # | 功能 | 说明 |
|---|------|------|
| 4 | **动画效果增强** | 更多交互动画 |
| 5 | **快捷键支持** | 键盘快捷操作 |
| 6 | **深色/浅色切换** | 主题明暗模式 |

### 🔵 未来规划

| # | 功能 | 说明 |
|---|------|------|
| 7 | **插件系统** | 扩展组件能力 |
| 8 | **数据导出/导入** | 配置备份恢复 |
| 9 | **多语言扩展** | 日语/韩语/更多语言 |
| 10 | **PWA 支持** | 离线访问 |

---

## 版本路线图

```
v1.0.x ✅ 基础功能
v1.1.0 ✅ GitHub贡献图 + 5套主题 + 倒计时 + 悬浮动效
v1.2.0 ✅ TODO + 世界时钟 + 便签 + 配置编辑器 + 公告 + 持久化
v1.3.0 ✅ iconfont + i18n + 背景自定义 + 音乐增强
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
v1.4.0 ⏳ 敏感操作确认 + 便签分类 + 主题色自定义
v2.0.0 ⏳ 插件系统 + 数据导出 + 更多语言
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
| 访客 | `api.nxvav.cn/api/ip/` | IP定位 |
| 天气 | `api.nxvav.cn/api/weather/?city=` | 天气预报 |
| 一言 | `v1.hitokoto.cn` | 每日一言 |
| 古诗 | `v1.jinrishici.com/all.json` | 诗词名句 |
| 英语名言 | `zenquotes.io/api/random` | 英文名言 |
| GitHub | `api.github.com/users/{user}/events` | 贡献数据 |

### 组件清单
```
src/components/
├── Announcement.vue              # 顶部滚动公告
├── Background.vue                # 粒子背景
├── BackgroundManager.vue        # 背景图管理
├── ConfigEditor.vue             # 配置编辑器
├── CustomCursor.vue             # 自定义鼠标
├── Footer.vue                   # 底部信息栏
├── LoadingScreen.vue            # 加载动画
├── MusicPlayer.vue              # 音乐播放器
├── MusicPlayerEnhanced.vue      # 增强音乐播放器
├── TypewriterBanner.vue         # 打字机标语
│
src/components/widgets/
├── ClockWidget.vue               # 时钟 + LED + 音乐翻转
├── WeatherWidget.vue            # 天气 + 湿度/风速
├── VisitorWidget.vue            # 访客信息
├── HitokotoWidget.vue           # 一言/古诗/英语
├── PomodoroWidget.vue           # 番茄钟
├── NotesWidget.vue              # 便签板
├── LinksWidget.vue              # 项目链接 + GitHub Stars
├── CountdownWidget.vue          # 倒计时
├── GithubContribWidget.vue      # GitHub贡献图
├── TodoWidget.vue               # 待办清单
├── WorldClockWidget.vue         # 世界时钟
└── QuickNotesWidget.vue         # 快捷便签

src/utils/
├── config.js                    # 配置加载 + localStorage合并
├── i18n.js                      # 国际化
└── security.js                  # 安全防护

src/styles/
├── global.scss                  # 全局样式 + CSS变量
└── iconfont.scss                # iconfont图标样式
```

### Footer 标语规则
```
<30天    → 稳稳运行、庆祝上线
30-100天 → 崩溃边缘、数据库炸了
>100天   → 骨灰级、文物级
```

### localStorage Keys
```
perfect-home-todos              # 待办清单
perfect-home-quick-notes        # 快捷便签
perfect-home-config-password    # 配置编辑器密码
perfect-home-edited-config      # 编辑后的配置（含 site/socials/links/announcement）
particlesEnabled                # 粒子背景开关
customCursorEnabled             # 自定义鼠标开关
ph-pv-total                     # 累计PV
ph-pv-date                      # PV统计日期
ph-pv-today                     # 今日PV
socials                         # 社交链接（兼容旧版）
siteLinks                       # 项目链接（兼容旧版）
themeMode                       # 主题模式（auto/dark/light）
activeTheme                     # 当前主题
language                        # 语言偏好
```

### iconfont 图标映射
| 图标名 | 说明 |
|--------|------|
| github, twitter, mail, link, code | 基础图标 |
| user, home, star, heart, camera | 常用图标 |
| music, video, book | 媒体图标 |
| rocket, fire, folder | 特殊图标 |
| bilibili, telegram, youtube, gitee | 社交图标 |

---

## 📈 开发统计

| 指标 | 数值 |
|------|------|
| 总版本数 | 4 |
| 完成功能数 | 37+ |
| 组件数 | 22 |
| 文档数 | 10 |
| API 集成数 | 6 |

---

*持续迭代中... 🚀*
