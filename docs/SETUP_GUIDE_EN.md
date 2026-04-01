# Perfect Home v1.3.0 - English Setup Guide

## 📖 Table of Contents

1. [Environment Setup](#environment-setup)
2. [Project Installation](#project-installation)
3. [Configuration](#configuration)
4. [Development Guide](#development-guide)
5. [Deployment Guide](#deployment-guide)
6. [FAQ](#faq)
7. [Advanced Configuration](#advanced-configuration)

---

## Environment Setup

### System Requirements

- **Operating System**: Windows / macOS / Linux
- **Node.js**: >= 16.0
- **npm**: >= 8.0
- **Browser**: Chrome / Firefox / Safari / Edge (latest version)

### Check Environment

```bash
# Check Node.js version
node --version

# Check npm version
npm --version
```

If versions are too old, visit [Node.js Official Website](https://nodejs.org/) to download the latest version.

---

## Project Installation

### Step 1: Clone Project

```bash
# Clone using Git
git clone https://github.com/327261086/perfect-home.git

# Enter project directory
cd perfect-home
```

### Step 2: Install Dependencies

```bash
# Using npm
npm install

# Or using yarn
yarn install

# Or using pnpm
pnpm install
```

### Step 3: Start Development Server

```bash
# Start development server
npm run dev

# Output example:
# ➜  Local:   http://localhost:5174/
# ➜  Network: http://192.168.1.100:5174/
```

### Step 4: Open Browser

Visit `http://localhost:5174` to view the project

---

## Configuration

### Configuration File Location

```
perfect-home/
└── public/
    └── config.json  ← Configuration file
```

### Configuration File Structure

#### 1. Site Information (site)

```json
{
  "site": {
    "title": "home",                    // Website title
    "domain": ".example",               // Domain suffix
    "avatar": "👤",                     // Avatar emoji
    "startDate": "2024-01-01",          // Site start date
    "description": {
      "identity": "Full Stack Developer", // Identity
      "interests": "Tech / AI / Code",    // Interests
      "showStartDate": true              // Show start date
    }
  }
}
```

#### 2. Social Links (socials)

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

#### 3. Project Links (links)

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

#### 4. Announcement Bar (announcement)

```json
{
  "announcement": {
    "enabled": true,                                    // Enable/disable
    "text": "🎉 Welcome to my personal homepage!",     // Announcement text
    "speed": 50,                                        // Scroll speed (seconds)
    "backgroundColor": "rgba(0, 212, 255, 0.1)",      // Background color
    "textColor": "#00d4ff"                             // Text color
  }
}
```

#### 5. Security Settings (security)

```json
{
  "security": {
    "disableRightClick": true,                         // Disable right-click
    "disableDevTools": true,                           // Disable dev tools
    "disableSourceView": true,                         // Disable source view
    "encryptData": true,                               // Encrypt data
    "rightClickMessage": "Right-click is disabled."    // Right-click message
  }
}
```

### Icon List

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

## Development Guide

### Project Structure

```
src/
├── views/
│   ├── MainLeft.vue         # Left module
│   ├── MainRight.vue        # Right module
│   └── SettingsPanel.vue    # Settings panel
├── components/
│   ├── Announcement.vue     # Announcement bar
│   ├── Background.vue       # Background + particles
│   ├── MusicPanel.vue       # Music player
│   ├── LoadingScreen.vue    # Loading screen
│   └── widgets/
│       ├── ClockWidget.vue
│       ├── WeatherWidget.vue
│       ├── VisitorWidget.vue
│       ├── HitokotoWidget.vue
│       ├── PomodoroWidget.vue
│       ├── NotesWidget.vue
│       ├── LinksWidget.vue
│       └── TimeProgressWidget.vue
├── utils/
│   ├── config.js            # Config loader
│   └── security.js          # Security features
├── store/
│   └── index.js             # Pinia state management
├── styles/
│   └── global.scss          # Global styles
├── App.vue                  # Main app
└── main.js                  # Entry point
```

### Modify Personal Information

#### Method 1: Edit Configuration File (Recommended)

1. Open `public/config.json`
2. Modify information in the `site` object
3. Save the file
4. Refresh the page

#### Method 2: Edit Vue Components

To modify styles or layout, edit the corresponding `.vue` file:

- Left module: `src/views/MainLeft.vue`
- Right module: `src/views/MainRight.vue`
- Settings panel: `src/views/SettingsPanel.vue`

### Add New Widget

1. Create new file in `src/components/widgets/NewWidget.vue`
2. Write component code
3. Import and use in `src/views/MainRight.vue`
4. Add related state in `src/store/index.js`

---

## Deployment Guide

### Build Production Version

```bash
# Build project
npm run build

# Output files in dist/ directory
```

### Deploy to GitHub Pages

```bash
# Deploy to GitHub Pages
npm run deploy

# Requires homepage field in package.json
```

### Deploy to Other Servers

#### Method 1: Using Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Method 2: Using Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

#### Method 3: Manual Deployment

1. Run `npm run build` to generate `dist` folder
2. Upload `dist` folder to your server
3. Configure web server (Nginx / Apache)

### Nginx Configuration Example

```nginx
server {
    listen 80;
    server_name example.com;

    root /var/www/perfect-home/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static resources
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

---

## FAQ

### Q1: How to change theme colors?

A: Edit `src/styles/global.scss`, modify CSS variables:

```scss
:root {
  --primary-color: #00d4ff;    // Cyan
  --secondary-color: #7b2ff7;  // Purple
}
```

### Q2: How to add new social links?

A: Edit `public/config.json`, add to `socials` array:

```json
{
  "id": "linkedin",
  "name": "LinkedIn",
  "url": "https://linkedin.com/in/your-username",
  "icon": "link",
  "color": "#0077B5"
}
```

### Q3: How to change background images?

A: Edit `src/store/index.js`, modify `defaultBgImages` array with image URLs.

### Q4: How to disable a feature?

A: Find the corresponding state in `src/store/index.js`, set to `false`.

### Q5: How to change language?

A: Edit `src/store/index.js`, modify `language` initial value:

```javascript
const language = ref(localStorage.getItem('language') || 'en')  // 'zh' or 'en'
```

### Q6: How to add custom fonts?

A: Add font link in `index.html` `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

Then use in `src/styles/global.scss`:

```scss
body {
  font-family: 'YourFont', sans-serif;
}
```

---

## Advanced Configuration

### Customize API

#### Modify Weather API

Edit `src/store/index.js`, modify `fetchWeather` function:

```javascript
const fetchWeather = async () => {
  try {
    const res = await fetch('https://your-weather-api.com/...')
    // Handle response
  } catch (e) {
    console.error('Weather fetch failed:', e)
  }
}
```

#### Modify Quote API

Edit `src/store/index.js`, modify `fetchHitokoto` function:

```javascript
const fetchHitokoto = async () => {
  try {
    const res = await fetch('https://your-quote-api.com/...')
    // Handle response
  } catch (e) {
    console.error('Quote fetch failed:', e)
  }
}
```

### Add Custom Styles

Add custom styles in `src/styles/global.scss`:

```scss
// Custom styles
.my-custom-class {
  color: #00d4ff;
  font-size: 16px;
}
```

### Use localStorage for Data Persistence

```javascript
// Save data
localStorage.setItem('key', JSON.stringify(data))

// Read data
const data = JSON.parse(localStorage.getItem('key'))

// Delete data
localStorage.removeItem('key')
```

---

## 🔗 Related Links

- [Vue 3 Documentation](https://vuejs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [Pinia Documentation](https://pinia.vuejs.org/)
- [SCSS Documentation](https://sass-lang.com/)

---

## 📞 Get Help

- Check [FAQ](#faq)
- Read other documentation files
- Submit GitHub Issue

---

**Document Version**: v1.0.2  
**Last Updated**: 2026-03-26 22:46 GMT+8
