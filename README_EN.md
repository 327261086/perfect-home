# Perfect Home v1.3.0

> 🏠 Modern Personal Homepage | Vue 3 + Vite + Pinia | Glassmorphism · 5 Themes · GitHub Contribution · Todo List · World Clock · Typewriter Banner · iconfont Icons · i18n | JSON Config · Zero Backend

**中文** | [English](README_EN.md)

![Version](https://img.shields.io/badge/version-1.3.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-production-brightgreen)

## ✨ Core Features

### Left Module
- 🎭 **Avatar Card** - Emoji/URL/Markdown support, rotating halo
- 📋 **3D Flip Card** - Front: site info / Back: changelog
- ⏳ **Time Capsule** - Today/Week/Month/Year progress bars
- 🔗 **Social Links** - iconfont icons with theme color

### Right Module
- ⏰ **Clock** - LED display + 7-period greeting
- 🌤️ **Weather** - Real-time temp, humidity, wind, 100+ icons
- 🌍 **Visitor** - IP location, city, timezone
- 🌐 **World Clock** - Beijing/Tokyo/LA/London
- 💬 **Hitokoto** - Chinese/German/English quotes
- ⏱️ **Countdown** - Custom target date
- 🍅 **Pomodoro** - 25/15/5 minute focus modes
- 📌 **Quick Notes** - 5 colors, collapse/expand
- ✅ **Todo List** - Add/complete/delete with progress
- 🐙 **GitHub Contribution** - 52-week heatmap + stats
- 🔗 **Project Links** - iconfont icons + GitHub Stars

### Global Features
- 🎨 **5 Preset Themes** - Cyberpunk/Sunset/Forest/Ocean/Aurora
- ✍️ **Typewriter Banner** - Top scrolling animation
- 🖱️ **Custom Cursor** - Theme color follows cursor
- ✨ **Particle Background** - Mouse interaction
- 🖼️ **Custom Background** - Default/URL/Unsplash
- 🎵 **Music Player** - Lyrics/progress/playlist/loop
- ⚙️ **Settings Panel** - Full configuration
- 🔐 **Password Config Editor** - Edit config in-page
- 📢 **Announcement Bar** - Scrolling with custom colors
- 📊 **Visitor Stats** - Today/total PV
- 🕐 **Site Timer** - Footer with funny slogans
- 🌏 **i18n** - Chinese/English bilingual
- 📱 **Mobile Responsive** - ≤480px single column

### 🔐 Security
- ✅ Disable right-click
- ✅ Disable F12
- ✅ Disable Ctrl+U
- ✅ DevTools detection

---

## 🚀 Quick Start

### 1. Clone & Install
```bash
git clone https://github.com/327261086/perfect-home.git
cd perfect-home
npm install
```

### 2. Modify Config
Edit `public/config.json`:
```json
{
  "site": {
    "title": "Your Name",
    "domain": ".com",
    "avatar": "👤",
    "startDate": "2024-01-01"
  }
}
```

### 3. Run & Deploy
```bash
npm run dev    # Development
npm run build  # Production build
```

---

## 📁 Project Structure

```
perfect-home/
├── public/
│   └── config.json              # Configuration
├── src/
│   ├── components/             # Components
│   │   ├── widgets/           # Feature widgets
│   │   ├── BackgroundManager.vue
│   │   ├── MusicPlayerEnhanced.vue
│   │   └── ConfigEditor.vue
│   ├── views/                 # Views
│   ├── store/                 # Pinia store
│   ├── utils/                 # Utilities
│   │   ├── config.js          # Config loader
│   │   ├── i18n.js           # i18n
│   │   └── security.js        # Security
│   └── styles/               # Styles
│       ├── global.scss
│       └── iconfont.scss
├── docs/                     # Documentation
└── package.json
```

---

## ⚙️ Configuration

See [CONFIG_GUIDE_EN.md](docs/CONFIG_GUIDE_EN.md) for detailed configuration.

### Basic Config (public/config.json)

```json
{
  "site": {
    "title": "home",
    "domain": ".example",
    "avatar": "👤",
    "startDate": "2024-01-01",
    "description": {
      "identity": "Full Stack Developer",
      "interests": "Tech / AI / Code"
    },
    "typewriterLines": ["Welcome!", "Code changes the world"],
    "countdownName": "New Year Countdown",
    "countdownDate": "2027-01-01",
    "github": "your-github-username"
  },
  "socials": [...],
  "links": [...],
  "announcement": {
    "enabled": true,
    "text": "Welcome to my homepage!",
    "speed": 50,
    "textColor": "#00d4ff",
    "bgColor": "rgba(0,212,255,0.1)"
  },
  "changelog": [
    { "version": "v1.3.0", "desc": "iconfont/i18n/background" }
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

## 🎨 Themes

| Theme | Colors | Description |
|-------|--------|-------------|
| Cyberpunk | #00d4ff / #7b2ff7 | Tech feel |
| Sunset | #ff6b6b / #ffa502 | Warm tones |
| Forest | #26de81 / #20bf6b | Natural fresh |
| Ocean | #4834d4 / #686de0 | Mysterious |
| Aurora | #ff9ff3 / #54a0ff | Dreamy gradient |

---

## 🌏 Internationalization

Switch between Chinese and English in the settings panel.

---

## 📚 Documentation

- [Setup Guide](docs/SETUP_GUIDE_EN.md) - Installation steps
- [Config Guide](docs/CONFIG_GUIDE_EN.md) - All config options
- [iconfont Guide](docs/ICONFONT_QUICK_START.md) - Icon configuration
- [Roadmap](docs/ROADMAP.md) - Development plan

---

## 🛠️ Tech Stack

- **Vue 3** - Progressive JS framework
- **Vite** - Next-gen build tool
- **Pinia** - State management
- **SCSS** - CSS preprocessor
- **iconfont** - Vector icons
- **CSS Variables** - Theme system

---

## 🌐 Free APIs

| API | URL | Purpose |
|-----|-----|---------|
| Visitor | api.nxvav.cn | IP location |
| Weather | api.nxvav.cn | Weather |
| Hitokoto | v1.hitokoto.cn | Quotes |
| Poem | v1.jinrishici.com | Chinese poetry |
| Quote | zenquotes.io | English quotes |
| GitHub | api.github.com | Contributions |

---

## 📄 License

MIT License

---

## 🤝 Contributing

Issues and PRs welcome!
