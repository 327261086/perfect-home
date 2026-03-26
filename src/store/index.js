import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const mainStore = defineStore('main', () => {
  // ==================== 配置 ====================
  const config = ref(null)
  
  const setConfig = (cfg) => {
    config.value = cfg
    // 从配置加载社交链接和项目链接
    if (cfg?.socials) {
      socials.value = cfg.socials.map(s => ({
        id: s.id,
        name: s.name,
        url: s.url,
        icon: s.icon,
        color: s.color
      }))
    }
    if (cfg?.links) {
      links.value = cfg.links.map(l => ({
        id: l.id,
        name: l.name,
        url: l.url,
        icon: l.icon,
        color: l.color
      }))
    }
    if (cfg?.site) {
      siteStartDate.value = cfg.site.startDate
      siteStartShow.value = cfg.site.description?.showStartDate ?? true
    }
  }

  // ==================== 基础状态 ====================
  const imgLoadStatus = ref(false)
  const innerWidth = ref(window.innerWidth)
  const siteStartDate = ref('2024-01-01')
  const siteStartShow = ref(true)
  const now = ref(new Date())
  
  // 主题设置
  const themeMode = ref(localStorage.getItem('themeMode') || 'auto')  // light/dark/auto
  const isNight = computed(() => {
    if (themeMode.value === 'light') return false
    if (themeMode.value === 'dark') return true
    const h = new Date().getHours()
    return h < 6 || h >= 18  // 自动判断：晚上6点后到早上6点为夜间
  })
  
  // 语言设置
  const language = ref(localStorage.getItem('language') || 'zh')  // zh/en

  // ==================== 设置面板 ====================
  const setOpenState = ref(false)
  const activeMenu = ref('wallpaper')

  // ==================== 壁纸设置 ====================
  const coverType = ref('default')
  
  // 默认壁纸 - 使用可靠的高清图源
  const defaultBgImages = ref([
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80',
    'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1920&q=80',
    'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&q=80',
    'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=1920&q=80',
    'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=1920&q=80'
  ])
  
  // 每日一图 (Bing)
  const dailyBgImages = ref([])
  const currentDailyIndex = ref(0)
  
  // 随机风景
  const sceneryBgImages = ref([
    'https://picsum.photos/seed/nature1/1920/1080',
    'https://picsum.photos/seed/landscape1/1920/1080',
    'https://picsum.photos/seed/mountain1/1920/1080',
    'https://picsum.photos/seed/ocean1/1920/1080',
    'https://picsum.photos/seed/forest1/1920/1080',
    'https://picsum.photos/seed/sky1/1920/1080'
  ])
  
  // 随机动漫
  const animeBgImages = ref([
    'https://picsum.photos/seed/anime1/1920/1080',
    'https://picsum.photos/seed/anime2/1920/1080',
    'https://picsum.photos/seed/anime3/1920/1080',
    'https://picsum.photos/seed/anime4/1920/1080',
    'https://picsum.photos/seed/anime5/1920/1080',
    'https://picsum.photos/seed/anime6/1920/1080'
  ])
  
  // 当前使用的壁纸列表
  const currentBgList = computed(() => {
    switch (coverType.value) {
      case 'daily': return dailyBgImages.value.length ? dailyBgImages.value : defaultBgImages.value
      case 'random-scenery': return sceneryBgImages.value
      case 'random-anime': return animeBgImages.value
      default: return defaultBgImages.value
    }
  })
  
  const currentBgIndex = ref(0)
  
  const currentBg = computed(() => {
    const list = currentBgList.value
    if (!list.length) return defaultBgImages.value[0]
    return list[currentBgIndex.value % list.length]
  })
  
  const nextBg = () => {
    currentBgIndex.value = (currentBgIndex.value + 1) % currentBgList.value.length
  }
  
  const prevBg = () => {
    currentBgIndex.value = (currentBgIndex.value - 1 + currentBgList.value.length) % currentBgList.value.length
  }

  // 获取 Bing 每日一图
  const fetchDailyBg = async () => {
    try {
      const res = await fetch('https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=8')
      const data = await res.json()
      if (data.images) {
        dailyBgImages.value = data.images.map(img => `https://cn.bing.com${img.urlbase}_1920x1080.jpg`)
      }
    } catch (e) {
      console.error('获取每日一图失败:', e)
    }
  }
  
  // 刷新随机壁纸
  const refreshRandomBg = (type) => {
    if (type === 'scenery') {
      sceneryBgImages.value = [
        `https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80`,
        `https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80`,
        `https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920&q=80`,
        `https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&q=80`,
        `https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1920&q=80`,
        `https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1920&q=80`
      ]
    } else if (type === 'anime') {
      animeBgImages.value = [
        `https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1920&q=80`,
        `https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&q=80`,
        `https://images.unsplash.com/photo-1614850523459-c2f4c699c52f?w=1920&q=80`,
        `https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=1920&q=80`,
        `https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?w=1920&q=80`,
        `https://images.unsplash.com/photo-1614730370305-2c127d6fdb58?w=1920&q=80`
      ]
    }
    // 切换到对应类型
    coverType.value = type
  }
  
  const initWallpapers = () => {
    fetchDailyBg()
  }

  // ==================== 音乐播放器 ====================
  const musicOpenState = ref(false)
  const musicClick = ref(true)
  const musicVolume = ref(0.7)
  const playerAutoplay = ref(false)
  const playerLoop = ref('all')
  const playerOrder = ref('list')
  const playerState = ref(false)

  // 使用可靠的音乐URL
  const songs = ref([
    { name: 'Player', artist: 'Demo', url: '', cover: '' }
  ])
  
  const currentSongIndex = ref(0)

  const toggleMusicPanel = () => {
    if (musicClick.value) {
      musicOpenState.value = !musicOpenState.value
    }
  }
  
  const setSongs = (newSongs) => {
    if (newSongs && newSongs.length > 0) {
      songs.value = newSongs
      currentSongIndex.value = 0
    }
  }

  // ==================== 访客信息 ====================
  const visitor = ref(null)
  const fetchVisitor = async () => {
    try {
      const res = await fetch('https://api.nxvav.cn/api/ip/')
      visitor.value = await res.json()
    } catch {
      visitor.value = { city: '未知', country_name: '未知', ip: '127.0.0.1' }
    }
  }

  // ==================== 天气 ====================
  const weather = ref(null)
  const weatherLoading = ref(true)
  
  const fetchWeather = async () => {
    weatherLoading.value = true
    let lat = null, lon = null, cityName = null

    // 策略1：通过 IP 定位获取经纬度
    const ipApis = [
      { url: 'https://api.nxvav.cn/api/ip/', parse: (d) => ({ lat: d.latitude, lon: d.longitude, city: d.city }) },
      { url: 'https://api.nxvav.cn/api/ip/', parse: (d) => ({ lat: d.latitude, lon: d.longitude, city: d.city }) },
      { url: 'https://api.nxvav.cn/api/ip/', parse: (d) => ({ lat: d.lat, lon: d.lon, city: d.city }) }
    ]

    for (const api of ipApis) {
      try {
        const res = await fetch(api.url)
        if (!res.ok) continue
        const data = await res.json()
        if (!data || data.code) continue
        const parsed = api.parse(data)
        if (parsed.lat && parsed.lon) {
          lat = parsed.lat
          lon = parsed.lon
          cityName = parsed.city || null
          break
        }
      } catch (e) {
        console.warn('天气定位API失败:', api.url, e.message)
      }
    }

    // 策略2：浏览器定位（IP失败时兜底）
    if (!lat) {
      try {
        const pos = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: 5000 })
        })
        lat = pos.coords.latitude
        lon = pos.coords.longitude
      } catch (e) {
        console.warn('浏览器定位失败:', e.message)
      }
    }

    // 策略3：默认北京
    if (!lat) {
      lat = 39.9042
      lon = 116.4074
      cityName = '北京'
    }

    // 获取天气 + 城市名
    try {
      const [wr, gr] = await Promise.all([
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m`),
        cityName ? Promise.resolve(null) : fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`)
      ])
      const w = await wr.json()
      if (!cityName && gr) {
        const g = await gr.json()
        cityName = g.address?.city || g.address?.town || g.address?.state || '未知'
      }
      const codeMap = {
        0: { icon: '☀️', text: '晴' }, 1: { icon: '🌤️', text: '晴间多云' }, 2: { icon: '⛅', text: '多云' }, 3: { icon: '☁️', text: '阴' },
        45: { icon: '🌫️', text: '雾' }, 48: { icon: '🌫️', text: '雾' },
        51: { icon: '🌧️', text: '小雨' }, 53: { icon: '🌧️', text: '中雨' }, 55: { icon: '🌧️', text: '大雨' },
        61: { icon: '🌧️', text: '小雨' }, 63: { icon: '🌧️', text: '中雨' }, 65: { icon: '🌧️', text: '大雨' },
        71: { icon: '❄️', text: '小雪' }, 73: { icon: '❄️', text: '中雪' }, 75: { icon: '❄️', text: '大雪' },
        80: { icon: '🌧️', text: '阵雨' }, 81: { icon: '🌧️', text: '阵雨' }, 82: { icon: '🌧️', text: '强阵雨' },
        95: { icon: '⛈️', text: '雷暴' }, 96: { icon: '⛈️', text: '雷暴' }, 99: { icon: '⛈️', text: '大雷暴' }
      }
      const code = w.current.weather_code
      weather.value = {
        temp: Math.round(w.current.temperature_2m),
        humidity: w.current.relative_humidity_2m,
        wind: Math.round(w.current.wind_speed_10m),
        icon: codeMap[code]?.icon || '🌤️',
        text: codeMap[code]?.text || '多云',
        city: cityName || '未知'
      }
    } catch {
      weather.value = { temp: 25, humidity: 45, wind: 12, icon: '☀️', text: '晴', city: cityName || '未知' }
    }
    weatherLoading.value = false
  }

  // ==================== 时间 ====================
  setInterval(() => { now.value = new Date() }, 1000)
  
  const timeStr = computed(() => now.value.toLocaleTimeString('zh-CN', { hour12: false }))
  const dateStr = computed(() => now.value.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' }))
  
  const greeting = computed(() => {
    const h = now.value.getHours()
    if (h < 6) return '🌙 夜深了，注意休息'
    if (h < 9) return '🌅 早上好！'
    if (h < 12) return '☀️ 上午好！'
    if (h < 14) return '🍚 中午好！'
    if (h < 18) return '🌤️ 下午好！'
    if (h < 22) return '🌆 傍晚好！'
    return '🌙 晚上好！'
  })

  // ==================== 时光进度 ====================
  const dayProgress = computed(() => {
    const mins = now.value.getHours() * 60 + now.value.getMinutes()
    return (mins / 1440 * 100).toFixed(1)
  })
  const weekProgress = computed(() => {
    const day = now.value.getDay() || 7
    const mins = (day - 1) * 1440 + now.value.getHours() * 60 + now.value.getMinutes()
    return (mins / (7 * 1440) * 100).toFixed(1)
  })
  const monthProgress = computed(() => {
    const days = new Date(now.value.getFullYear(), now.value.getMonth() + 1, 0).getDate()
    return (now.value.getDate() / days * 100).toFixed(1)
  })
  const yearProgress = computed(() => {
    const start = new Date(now.value.getFullYear(), 0, 1)
    const end = new Date(now.value.getFullYear() + 1, 0, 1)
    return ((now.value - start) / (end - start) * 100).toFixed(1)
  })

  const siteDays = computed(() => {
    const start = new Date(siteStartDate.value)
    const today = new Date()
    return Math.floor((today - start) / (1000 * 60 * 60 * 24))
  })

  // ==================== Hitokoto ====================
  const hitokoto = ref({ text: '', from: '' })
  const hitokotoLoading = ref(true)
  
  const fetchHitokoto = async () => {
    hitokotoLoading.value = true
    try {
      const res = await fetch('https://v1.hitokoto.cn')
      const data = await res.json()
      hitokoto.value = { 
        text: data.hitokoto, 
        from: (data.from_who || '匿名') + (data.from ? `《${data.from}》` : '') 
      }
    } catch {
      hitokoto.value = { text: '生活不止眼前的苟且，还有诗和远方。', from: '高晓松' }
    }
    hitokotoLoading.value = false
  }

  // ==================== 番茄钟 ====================
  const pomoDuration = ref(25)
  const pomoTime = ref(25 * 60)
  const pomoRunning = ref(false)
  const pomoMode = ref('focus')
  const pomoCompleted = ref(0)
  const pomoStats = ref({})
  
  let pomoTimer = null
  
  const startPomo = () => {
    pomoRunning.value = true
    pomoTimer = setInterval(() => {
      if (pomoTime.value > 0) {
        pomoTime.value--
      } else {
        pomoCompleted.value++
        const today = new Date().toLocaleDateString()
        pomoStats.value[today] = (pomoStats.value[today] || 0) + 1
        stopPomo()
      }
    }, 1000)
  }
  
  const stopPomo = () => {
    pomoRunning.value = false
    if (pomoTimer) clearInterval(pomoTimer)
  }
  
  const resetPomo = () => {
    stopPomo()
    pomoTime.value = pomoDuration.value * 60
  }
  
  const setPomoDuration = (min) => {
    pomoDuration.value = min
    resetPomo()
  }

  // ==================== 便签板 ====================
  const notesEnabled = ref(true)
  const notes = ref(JSON.parse(localStorage.getItem('siteNotes') || '[]'))
  
  const addNote = (content) => {
    notes.value.unshift({ id: Date.now(), content, time: new Date().toISOString() })
    localStorage.setItem('siteNotes', JSON.stringify(notes.value))
  }
  
  const delNote = (id) => {
    notes.value = notes.value.filter(n => n.id !== id)
    localStorage.setItem('siteNotes', JSON.stringify(notes.value))
  }

  // ==================== 项目链接 ====================
  const links = ref(JSON.parse(localStorage.getItem('siteLinks') || 'null') || [
    { id: 1, name: '博客', url: 'https://blog.example.com', icon: 'code', color: '#3b82f6' },
    { id: 2, name: '图库', url: 'https://photos.example.com', icon: 'camera', color: '#10b981' },
    { id: 3, name: '项目', url: 'https://projects.example.com', icon: 'folder', color: '#8b5cf6' },
    { id: 4, name: '关于', url: 'https://about.example.com', icon: 'user', color: '#f59e0b' }
  ])
  
  const saveLinks = () => localStorage.setItem('siteLinks', JSON.stringify(links.value))
  const addLink = (link) => { links.value.push({ id: Date.now(), ...link }); saveLinks() }
  const delLink = (id) => { links.value = links.value.filter(l => l.id !== id); saveLinks() }

  // ==================== 社交链接 ====================
  const socials = ref(JSON.parse(localStorage.getItem('socials') || 'null') || [
    { id: 1, name: 'GitHub', url: 'https://github.com', icon: 'github', color: '#333' },
    { id: 2, name: 'Gitee', url: 'https://gitee.com', icon: 'code', color: '#c71d23' },
    { id: 3, name: 'B站', url: 'https://bilibili.com', icon: 'video', color: '#00a1d6' },
    { id: 4, name: '邮箱', url: 'mailto:hi@example.com', icon: 'mail', color: '#ea4335' }
  ])
  
  const saveSocials = () => localStorage.setItem('socials', JSON.stringify(socials.value))
  const addSocial = (social) => { socials.value.push({ id: Date.now(), ...social }); saveSocials() }
  const delSocial = (id) => { socials.value = socials.value.filter(s => s.id !== id); saveSocials() }

  // ==================== 鼠标效果 ====================
  const mouseX = ref(0)
  const mouseY = ref(0)
  const cursorGlow = ref({ x: 0, y: 0 })
  
  const updateMouse = (e) => {
    mouseX.value = e.clientX
    mouseY.value = e.clientY
    cursorGlow.value = { x: e.clientX, y: e.clientY }
  }

  // ==================== 动作 ====================
  const setInnerWidth = (value) => {
    innerWidth.value = value
  }
  
  const setImgLoadStatus = (value) => {
    imgLoadStatus.value = value
  }

  return {
    // 配置
    config, setConfig,
    
    // 基础
    imgLoadStatus, innerWidth, setInnerWidth, setImgLoadStatus,
    siteStartDate, siteStartShow, siteDays,
    themeMode, isNight, language,
    
    // 设置面板
    setOpenState, activeMenu,
    
    // 壁纸
    coverType, currentBg, currentBgIndex, nextBg, prevBg, initWallpapers, refreshRandomBg,
    
    // 音乐
    musicOpenState, musicClick, musicVolume, playerAutoplay, playerLoop, playerOrder, playerState,
    songs, currentSongIndex, toggleMusicPanel, setSongs,
    
    // 访客
    visitor, fetchVisitor,
    
    // 天气
    weather, weatherLoading, fetchWeather,
    
    // 时间
    now, timeStr, dateStr, greeting,
    
    // 时光进度
    dayProgress, weekProgress, monthProgress, yearProgress,
    
    // Hitokoto
    hitokoto, hitokotoLoading, fetchHitokoto,
    
    // 番茄钟
    pomoDuration, pomoTime, pomoRunning, pomoMode, pomoCompleted, pomoStats,
    startPomo, stopPomo, resetPomo, setPomoDuration,
    
    // 便签
    notesEnabled, notes, addNote, delNote,
    
    // 链接
    links, addLink, delLink,
    socials, addSocial, delSocial,
    
    // 鼠标
    mouseX, mouseY, cursorGlow, updateMouse
  }
})
