// 配置加载模块 - 从 public/config.json 加载数据
export async function loadConfig() {
  try {
    const response = await fetch(import.meta.env.BASE_URL + 'config.json')
    if (!response.ok) throw new Error('Failed to load config')
    return await response.json()
  } catch (error) {
    console.error('配置加载失败，使用默认值:', error)
    return getDefaultConfig()
  }
}

export function getDefaultConfig() {
  return {
    site: {
      title: 'home',
      domain: '.example',
      avatar: '👤',
      startDate: '2024-01-01',
      description: {
        identity: '全栈开发者',
        interests: '科技爱好者 / AI / 代码',
        showStartDate: true
      }
    },
    socials: [
      {
        id: 'github',
        name: 'GitHub',
        url: 'https://github.com',
        icon: 'github',
        color: '#333333'
      }
    ],
    links: [
      {
        id: 'project1',
        name: 'Perfect Home',
        url: 'https://github.com/327261086/perfect-home',
        icon: 'github',
        color: '#00d4ff'
      }
    ],
    security: {
      disableRightClick: true,
      disableDevTools: true,
      disableSourceView: true,
      encryptData: true
    }
  }
}

// 数据加密/解密（简单实现）
export function encryptData(data) {
  return btoa(JSON.stringify(data))
}

export function decryptData(encrypted) {
  try {
    return JSON.parse(atob(encrypted))
  } catch {
    return null
  }
}
