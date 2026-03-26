# Perfect Home v1.0.2

> 🏠 Modern Personal Homepage | Vue 3 + Vite + Pinia | Glassmorphism · 3D Flip · Theme Toggle · Pomodoro · Weather · Quotes | JSON Config · No Backend

**中文** | [English](README_EN.md)

![Version](https://img.shields.io/badge/version-1.0.2-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-production-brightgreen)

## ✨ Core Features

### Left Module
- 🎭 **Avatar** - Rotating halo animation
- 📋 **Site Introduction** - 3D flip card
- 📝 **Changelog** - Scrollable version history
- ⏳ **Time Capsule** - Today/Week/Month/Year progress bars
- 🔗 **Social Links** - GitHub, Twitter, Email, etc.

### Right Module (2x2 + 2x2 + Full Width)
- ⏰ **Clock Card** - LED-style HH:MM:SS display
- 🌤️ **Weather Card** - Real-time temperature, weather, city
- 🌍 **Visitor Card** - IP address, city, timezone
- 💬 **Hitokoto Card** - Random quotes, author
- 🍅 **Pomodoro Timer** - 25/15/5 minute modes
- 📝 **Notes Board** - Add/delete notes
- 🔗 **Project Links** - 2x2 grid layout

### Global Features
- 🎨 **Theme Toggle** - Light/Dark/Auto
- 🌐 **Multi-language** - Chinese/English
- 🖼️ **Background Images** - Multiple sources
- 🔄 **Auto-switch** - Every 30 seconds
- ✨ **Particle Effects** - Mouse interaction animation
- 🎵 **Music Player** - 3D flip effect
- ⚙️ **Settings Panel** - Complete configuration
- 📢 **Announcement Bar** - Seamless scrolling
- ⚠️ **Right-click Alert** - Disable right-click with message

### 🔐 Security Features
- ✅ Disable right-click menu
- ✅ Disable F12 debugging
- ✅ Disable Ctrl+U source view
- ✅ Disable text selection/copy/paste
- ✅ Disable drag-and-drop
- ✅ Developer tools detection
- ✅ Config integrity check
- ✅ Auto-recovery of tampered config

---

## 🚀 Quick Start

### Requirements
- Node.js >= 16.0
- npm >= 8.0

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

Visit `http://localhost:5174`

### Build
```bash
npm run build
```

### Deploy
```bash
npm run deploy
```

---

## 📝 Configuration

All personal information, social links, and project links are stored in **`public/config.json`**.

### How to Edit

1. **Open**: `public/config.json`
2. **Modify**: Your information
3. **Save**: The file
4. **Refresh**: The page - config auto-loads

### Configuration Structure

```json
{
  "site": {
    "title": "home",
    "domain": ".example",
    "avatar": "👤",
    "startDate": "2024-01-01",
    "description": {
      "identity": "Full Stack Developer",
      "interests": "Tech Enthusiast / AI / Code",
      "showStartDate": true
    }
  },
  "socials": [
    {
      "id": "github",
      "name": "GitHub",
      "url": "https://github.com/your-username",
      "icon": "github",
      "color": "#333333"
    }
  ],
  "links": [
    {
      "id": "project1",
      "name": "Perfect Home",
      "url": "https://github.com/327261086/perfect-home",
      "icon": "github",
      "color": "#00d4ff"
    }
  ],
  "announcement": {
    "enabled": true,
    "text": "🎉 Welcome to my personal homepage!",
    "speed": 50,
    "backgroundColor": "rgba(0, 212, 255, 0.1)",
    "textColor": "#00d4ff"
  },
  "security": {
    "disableRightClick": true,
    "disableDevTools": true,
    "disableSourceView": true,
    "encryptData": true,
    "rightClickMessage": "Right-click is disabled for better browsing experience."
  }
}
```

---

## 🎨 Tech Stack

- **Framework**: Vue 3.4
- **Build Tool**: Vite 5
- **State Management**: Pinia
- **Styling**: SCSS
- **Font**: HarmonyOS Sans (CDN)

---

## 📦 API Integration

- **Weather**: Open-Meteo (`api.open-meteo.com`)
- **Visitor**: ipapi.co (`https://ipapi.co/json/`)
- **Quotes**: Hitokoto (`https://v1.hitokoto.cn`)
- **Wallpapers**: Unsplash + Bing + Picsum
- **Music**: SoundHelix (`https://www.soundhelix.com/examples/mp3/`)
- **GitHub**: Star count (`https://api.github.com/repos/327261086/perfect-home`)

---

## 🎯 Theme Colors

- **Cyan**: `#00d4ff`
- **Purple**: `#7b2ff7`

---

## 📱 Responsive Design

- **Desktop**: Left-right split 50% + 50%
- **Mobile**: Single column layout (@media max-width: 900px)

---

## 📁 Project Structure

```
perfect-home/
├── public/
│   └── config.json              ← Configuration file
├── src/
│   ├── views/
│   │   ├── MainLeft.vue         ← Left module
│   │   ├── MainRight.vue        ← Right module
│   │   └── SettingsPanel.vue    ← Settings panel
│   ├── components/
│   │   ├── Announcement.vue     ← Announcement bar
│   │   ├── Background.vue       ← Background + particles
│   │   ├── MusicPanel.vue       ← Music player
│   │   └── widgets/             ← Widget components
│   ├── utils/
│   │   ├── config.js            ← Config loader
│   │   └── security.js          ← Security features
│   ├── store/index.js           ← Pinia state management
│   ├── styles/global.scss       ← Global styles
│   └── App.vue                  ← Main app
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 📚 Documentation

| Doc | Description |
|-----|-------------|
| 📖 [Setup Guide](docs/SETUP_GUIDE_EN.md) | Detailed install, config & deploy guide |
| 🔧 [Config Guide](docs/CONFIG_GUIDE_EN.md) | Complete config.json reference |
| 📝 [Release Notes](docs/RELEASE_NOTES_EN.md) | Version changelog |
| 🌐 [搭建教程](docs/SETUP_GUIDE.md) | 中文搭建文档 |
| 🌐 [配置指南](docs/CONFIG_GUIDE.md) | 中文配置文档 |
| 📖 [Wiki](https://github.com/327261086/perfect-home/wiki) | FAQ & Advanced Tutorials |

---

## 🔐 Data Security

- ✅ All personal info stored in `public/config.json`
- ✅ Only you and I can view it
- ✅ All debugging tools disabled
- ✅ Config integrity check every 5 seconds
- ✅ Auto-recovery of tampered config

---

## 📊 Version History

| Version | Release Date | Content |
|---------|--------------|---------|
| v1.0.2 | 2026-03-26 | Fix social link icons / Update GitHub icon |
| v1.0.1 | 2026-03-26 | Right-click alert / Announcement bar |
| v1.0.0 | 2026-03-26 | Initial release / Config management / Security |

---

## 🎓 FAQ

### Q: How to change personal information?
A: Edit `public/config.json` in the `site` object, then refresh the page.

### Q: How to add social links?
A: Edit `public/config.json` in the `socials` array, add a new social link object.

### Q: How to modify project links?
A: Edit `public/config.json` in the `links` array, add or modify project links.

### Q: How to change announcement text?
A: Edit `public/config.json` in the `announcement.text` field.

### Q: How to disable right-click alert?
A: Edit `public/config.json` in the `security.disableRightClick` to `false`.

### Q: How to change theme colors?
A: Edit `src/styles/global.scss` CSS variables.

---

## ⚠️ Important Notes

1. **Don't share `public/config.json`** - Contains personal information
2. **Backup your config** - Prevent accidental loss
3. **Refresh after editing** - Config auto-loads
4. **Keep security enabled** - Prevent data tampering

---

## 🤝 Contributing

Issues and Pull Requests are welcome!

---

## 📄 License

MIT License - See LICENSE file for details

---

## 👨‍💻 Author

**Qingfeng Rushui**

- GitHub: [@327261086](https://github.com/327261086)
- Project: [Perfect Home](https://github.com/327261086/perfect-home)

---

## 🙏 Acknowledgments

Thanks to these open-source projects and services:

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Pinia](https://pinia.vuejs.org/)
- [Open-Meteo](https://open-meteo.com/)
- [Hitokoto](https://hitokoto.cn/)
- [ipapi.co](https://ipapi.co/)

---

## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=327261086/perfect-home&type=Date)](https://star-history.com/#327261086/perfect-home&Date)

---

**Version**: v1.0.2  
**Release Date**: 2026-03-26  
**Status**: ✅ Production Ready
