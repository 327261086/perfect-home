# Perfect Home - English Configuration Guide

## 🔧 Configuration Management

All personal information, social links, and project links are stored in **`public/config.json`**.

### How to Edit

1. **Open**: `public/config.json`
2. **Modify**: Your information
3. **Save**: The file
4. **Refresh**: The page - config auto-loads

---

## 📝 Configuration Structure

### Site Information

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
  }
}
```

**Parameters:**
- `title`: Website title (displayed in logo)
- `domain`: Domain suffix (displayed in logo)
- `avatar`: Avatar emoji
- `startDate`: Site start date (YYYY-MM-DD format)
- `identity`: Your identity/profession
- `interests`: Your interests
- `showStartDate`: Whether to show site start date

### Social Links

```json
{
  "socials": [
    {
      "id": "github",
      "name": "GitHub",
      "url": "https://github.com/your-username",
      "icon": "github",
      "color": "#333333"
    },
    {
      "id": "twitter",
      "name": "Twitter",
      "url": "https://twitter.com/your-username",
      "icon": "twitter",
      "color": "#1DA1F2"
    },
    {
      "id": "email",
      "name": "Email",
      "url": "mailto:your-email@example.com",
      "icon": "mail",
      "color": "#EA4335"
    }
  ]
}
```

**Parameters:**
- `id`: Unique identifier
- `name`: Display name
- `url`: Link URL
- `icon`: Icon name (see icon list below)
- `color`: Link color (hex format)

### Project Links

```json
{
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

**Parameters:**
- `id`: Unique identifier
- `name`: Project name
- `url`: Project URL
- `icon`: Icon name
- `color`: Project color

### Announcement Bar

```json
{
  "announcement": {
    "enabled": true,
    "text": "🎉 Welcome to my personal homepage!",
    "speed": 50,
    "backgroundColor": "rgba(0, 212, 255, 0.1)",
    "textColor": "#00d4ff"
  }
}
```

**Parameters:**
- `enabled`: Enable/disable announcement bar
- `text`: Announcement text
- `speed`: Scroll speed in seconds (smaller = faster)
- `backgroundColor`: Background color (CSS color value)
- `textColor`: Text color (CSS color value)

### Security Settings

```json
{
  "security": {
    "disableRightClick": true,
    "disableDevTools": true,
    "disableSourceView": true,
    "encryptData": true,
    "rightClickMessage": "Right-click is disabled for better browsing experience."
  }
}
```

**Parameters:**
- `disableRightClick`: Disable right-click menu
- `disableDevTools`: Disable developer tools
- `disableSourceView`: Disable source code view
- `encryptData`: Encrypt data
- `rightClickMessage`: Right-click alert message

---

## 🎨 Icon List

| Icon Name | Display | Purpose |
|-----------|---------|---------|
| github | ⬛ | GitHub |
| twitter | 𝕏 | Twitter |
| mail | ✉️ | Email |
| link | 🔗 | Link |
| code | 💻 | Code |
| user | 👤 | User |
| home | 🏠 | Home |
| star | ⭐ | Star |
| heart | ❤️ | Heart |
| camera | 📷 | Camera |
| music | 🎵 | Music |
| video | 📺 | Video |
| book | 📚 | Book |
| rocket | 🚀 | Rocket |
| fire | 🔥 | Fire |

---

## 🎨 Color Reference

### Theme Colors
- **Cyan**: `#00d4ff`
- **Purple**: `#7b2ff7`

### Common Colors
- **Black**: `#000000`
- **White**: `#FFFFFF`
- **Gray**: `#808080`
- **Red**: `#FF0000`
- **Green**: `#00FF00`
- **Blue**: `#0000FF`
- **Yellow**: `#FFFF00`

### Social Media Colors
- **GitHub**: `#333333`
- **Twitter**: `#1DA1F2`
- **Facebook**: `#1877F2`
- **Instagram**: `#E4405F`
- **LinkedIn**: `#0077B5`
- **YouTube**: `#FF0000`
- **Email**: `#EA4335`

---

## 📋 Configuration Examples

### Example 1: Add LinkedIn

```json
{
  "id": "linkedin",
  "name": "LinkedIn",
  "url": "https://linkedin.com/in/your-username",
  "icon": "link",
  "color": "#0077B5"
}
```

### Example 2: Add Personal Blog

```json
{
  "id": "blog",
  "name": "My Blog",
  "url": "https://yourblog.com",
  "icon": "link",
  "color": "#FF6B6B"
}
```

### Example 3: Change Announcement

```json
{
  "enabled": true,
  "text": "🚀 New features coming soon!",
  "speed": 40,
  "backgroundColor": "rgba(123, 47, 247, 0.1)",
  "textColor": "#7b2ff7"
}
```

### Example 4: Disable Right-click Alert

```json
{
  "disableRightClick": false,
  "rightClickMessage": ""
}
```

---

## ⚙️ Advanced Configuration

### Modify Theme Colors

Edit `src/styles/global.scss`:

```scss
:root {
  --primary-color: #00d4ff;
  --secondary-color: #7b2ff7;
}
```

### Modify Background Images

Edit `src/store/index.js`:

```javascript
const defaultBgImages = ref([
  'https://your-image-url-1.jpg',
  'https://your-image-url-2.jpg',
  'https://your-image-url-3.jpg'
])
```

### Modify API Endpoints

Edit `src/store/index.js`:

```javascript
// Weather API
const fetchWeather = async () => {
  const res = await fetch('https://your-weather-api.com/...')
  // ...
}

// Quote API
const fetchHitokoto = async () => {
  const res = await fetch('https://your-quote-api.com/...')
  // ...
}
```

---

## 🔐 Security Notes

1. **Don't share `public/config.json`** - Contains personal information
2. **Backup your config** - Prevent accidental loss
3. **Keep security enabled** - Prevent data tampering
4. **Refresh after editing** - Config auto-loads

---

## 📞 Support

- Check configuration examples above
- Read other documentation files
- Submit GitHub Issue

---

**Document Version**: v1.0.2  
**Last Updated**: 2026-03-26 22:46 GMT+8
