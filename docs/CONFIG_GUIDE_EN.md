# Perfect Home v1.3.0 - Configuration Guide

> 📅 Last Updated: 2026-04-01  
> 📌 Current Version: v1.3.0

---

## 📝 Configuration File

All configuration is in **`public/config.json`**.

### How to Edit

**Option 1: Direct File Edit**
1. Open `public/config.json`
2. Modify the configuration
3. Save and refresh

**Option 2: Config Editor (Recommended)**
1. Click the ⚙️ button (bottom right)
2. Enter password (auto-set on first use)
3. Edit all settings in-page
4. Save - changes take effect immediately and persist after refresh

---

## 📋 Full Configuration Structure

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

## 🏠 site - Site Information

```json
"site": {
  "title": "home",
  "domain": ".example",
  "avatar": "👤",
  "startDate": "2024-01-01",
  "description": {
    "identity": "Full Stack Developer",
    "interests": "Tech / AI / Code",
    "showStartDate": true
  },
  "typewriterLines": [
    "Welcome! 👋",
    "Code changes the world 🌍",
    "Stay curious, keep learning ✨"
  ],
  "countdownName": "New Year Countdown",
  "countdownDate": "2027-01-01",
  "github": "your-github-username"
}
```

| Field | Type | Description |
|-------|------|-------------|
| title | string | Browser tab title + main title |
| domain | string | Domain suffix, e.g. `.com` |
| avatar | string | Avatar: Emoji/URL/Markdown `![](url)` |
| startDate | string | Start date, format `YYYY-MM-DD` |
| identity | string | Identity description |
| interests | string | Interest tags |
| showStartDate | boolean | Show start date on flip card |
| typewriterLines | array | Typewriter slogans, one per line |
| countdownName | string | Countdown name |
| countdownDate | string | Countdown target date |
| github | string | GitHub username |

### Avatar Format Examples

```json
"avatar": "👤"
"avatar": "https://avatars.githubusercontent.com/u/12345"
"avatar": "![me](https://example.com/photo.jpg)"
```

---

## 🔗 socials - Social Links

```json
"socials": [
  {
    "id": "github",
    "name": "GitHub",
    "url": "https://github.com/username",
    "icon": "github",
    "color": "#333333"
  }
]
```

| Field | Type | Description |
|-------|------|-------------|
| id | string | Unique identifier |
| name | string | Display name |
| url | string | Link URL |
| icon | string | Icon name (iconfont icon) |
| color | string | Icon color, hex format |

---

## 🔗 links - Project Links

```json
"links": [
  {
    "id": "project1",
    "name": "Perfect Home",
    "url": "https://github.com/username/perfect-home",
    "icon": "github",
    "color": "#00d4ff"
  }
]
```

---

## 📢 announcement - Top Announcement Bar

```json
"announcement": {
  "enabled": true,
  "text": "🎉 Welcome to my homepage!",
  "speed": 50,
  "textColor": "#00d4ff",
  "bgColor": "rgba(0, 212, 255, 0.1)"
}
```

| Field | Type | Description |
|-------|------|-------------|
| enabled | boolean | Show announcement bar |
| text | string | Announcement text |
| speed | number | Scroll speed in seconds (smaller = faster) |
| textColor | string | Text color |
| bgColor | string | Background color (rgba format) |

---

## 📝 changelog - Update Log

```json
"changelog": [
  { "version": "v1.3.0", "desc": "iconfont/i18n/background" },
  { "version": "v1.2.0", "desc": "Todo/Notes/Editor/Announcement" },
  { "version": "v1.0.0", "desc": "Initial release" }
]
```

---

## 🖼️ background - Background Settings

```json
"background": {
  "type": "default",
  "customUrl": "",
  "opacity": 1,
  "blur": 0
}
```

| Field | Type | Description |
|-------|------|-------------|
| type | string | `default` gradient / `custom` image URL / `unsplash` random |
| customUrl | string | Custom image URL |
| opacity | number | Opacity, 0-1 |
| blur | number | Blur, 0-20 pixels |

---

## 🎵 music - Music Player

```json
"music": {
  "enabled": true,
  "autoPlay": false,
  "volume": 0.5,
  "playlist": [
    {
      "name": "Song Name",
      "artist": "Artist",
      "url": "music-file-url",
      "cover": "cover-image-url",
      "lyrics": "line1 | line2 | line3"
    }
  ]
}
```

| Field | Type | Description |
|-------|------|-------------|
| enabled | boolean | Enable music feature |
| autoPlay | boolean | Auto-play on load |
| volume | number | Volume, 0-1 |
| playlist | array | Playlist items |

---

## 🔐 security - Security Settings

```json
"security": {
  "disableRightClick": true,
  "disableDevTools": true,
  "disableSourceView": true,
  "encryptData": true,
  "rightClickMessage": "Right-click disabled for better browsing."
}
```

| Field | Type | Description |
|-------|------|-------------|
| disableRightClick | boolean | Disable right-click menu |
| disableDevTools | boolean | Disable dev tools |
| disableSourceView | boolean | Disable view source |
| encryptData | boolean | Enable data encryption |
| rightClickMessage | string | Right-click block message |

---

## 🎨 iconfont Icon System

Project uses iconfont icons. Each icon is `icon-` + name.

### Available Icons

| Icon Name | Description |
|-----------|-------------|
| github | GitHub |
| twitter | Twitter |
| mail | Email |
| link | Link |
| code | Code |
| user | User |
| home | Home |
| star | Star |
| heart | Heart |
| camera | Camera |
| music | Music |
| video | Video |
| book | Book |
| rocket | Rocket |
| fire | Fire |
| bilibili | Bilibili |
| telegram | Telegram |
| youtube | YouTube |
| gitee | Gitee |
| folder | Folder |

### Usage Example

```json
"icon": "github"
```

Renders as `<i class="iconfont icon-github"></i>`

---

## 🌏 Internationalization

Project supports Chinese and English. Switch language in settings panel.

### Manual Configuration

Edit translations in `src/utils/i18n.js`:

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

## 💾 Data Storage

| Location | Content |
|----------|---------|
| public/config.json | Static config file |
| localStorage | User edits, themes, notes, todos, stats |

---

## ⚠️ Notes

1. **After modifying config.json, rebuild**: `npm run build`
2. **Config editor changes apply immediately**, saved to localStorage
3. **Page refresh doesn't lose data**: Edited config syncs to localStorage
4. **Theme saved to localStorage**: Won't affect other settings
5. **APIs require internet**: Weather, visitor info need network

---

**Configuration complete!**
