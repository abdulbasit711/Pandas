export const THEMES = {
  CYBERPUNK: {
    id: 'cyberpunk',
    name: 'Cyberpunk',
    colors: {
      primary: '#ff6b35',
      secondary: '#9d4edd',
      accent: '#f72585',
      teal: '#38bdf8',
      yellow: '#fbbf24',
      darkBg: '#0f172a',
      darkerBg: '#0a0f1e',
      cardBg: 'rgba(30, 41, 59, 0.7)',
      text: '#e2e8f0',
      gray: '#94a3b8'
    },
    gradients: {
      primary: 'linear-gradient(45deg, #ff6b35, #9d4edd)',
      secondary: 'linear-gradient(45deg, #9d4edd, #f72585)',
      accent: 'linear-gradient(45deg, #f72585, #38bdf8)'
    }
  },
  DARK_MATRIX: {
    id: 'dark_matrix',
    name: 'Dark Matrix',
    colors: {
      primary: '#00ff41',
      secondary: '#008f11',
      accent: '#00d4ff',
      teal: '#00ff9d',
      yellow: '#ffff00',
      darkBg: '#0a0a0a',
      darkerBg: '#000000',
      cardBg: 'rgba(0, 255, 65, 0.05)',
      text: '#ffffff',
      gray: '#666666'
    },
    gradients: {
      primary: 'linear-gradient(45deg, #00ff41, #008f11)',
      secondary: 'linear-gradient(45deg, #008f11, #00d4ff)',
      accent: 'linear-gradient(45deg, #00d4ff, #00ff9d)'
    }
  },
  SYNTHWAVE: {
    id: 'synthwave',
    name: 'Synthwave',
    colors: {
      primary: '#ff00ff',
      secondary: '#00ffff',
      accent: '#ffcc00',
      teal: '#00ffff',
      yellow: '#ffcc00',
      darkBg: '#000033',
      darkerBg: '#000022',
      cardBg: 'rgba(255, 0, 255, 0.1)',
      text: '#ffffff',
      gray: '#8888ff'
    },
    gradients: {
      primary: 'linear-gradient(45deg, #ff00ff, #00ffff)',
      secondary: 'linear-gradient(45deg, #00ffff, #ffcc00)',
      accent: 'linear-gradient(45deg, #ffcc00, #ff00ff)'
    }
  },
  TECH_GOLD: {
    id: 'tech_gold',
    name: 'Tech Gold',
    colors: {
      primary: '#ffd700',
      secondary: '#c0c0c0',
      accent: '#daa520',
      teal: '#c0c0c0',
      yellow: '#ffd700',
      darkBg: '#121212',
      darkerBg: '#000000',
      cardBg: 'rgba(255, 215, 0, 0.05)',
      text: '#ffffff',
      gray: '#666666'
    },
    gradients: {
      primary: 'linear-gradient(45deg, #ffd700, #c0c0c0)',
      secondary: 'linear-gradient(45deg, #c0c0c0, #daa520)',
      accent: 'linear-gradient(45deg, #daa520, #ffd700)'
    }
  },
  DEEP_SPACE: {
    id: 'deep_space',
    name: 'Deep Space',
    colors: {
      primary: '#4361ee',
      secondary: '#7209b7',
      accent: '#f72585',
      teal: '#4cc9f0',
      yellow: '#ffba08',
      darkBg: '#03071e',
      darkerBg: '#000814',
      cardBg: 'rgba(67, 97, 238, 0.1)',
      text: '#ffffff',
      gray: '#adb5bd'
    },
    gradients: {
      primary: 'linear-gradient(45deg, #4361ee, #7209b7)',
      secondary: 'linear-gradient(45deg, #7209b7, #f72585)',
      accent: 'linear-gradient(45deg, #f72585, #4cc9f0)'
    }
  }
};

export const DEFAULT_THEME = THEMES.SYNTHWAVE;