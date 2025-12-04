import React, { createContext, useState, useContext, useEffect } from 'react';
import { THEMES, DEFAULT_THEME } from './theme';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('selectedTheme');
    return savedTheme ? THEMES[savedTheme.toUpperCase()] || DEFAULT_THEME : DEFAULT_THEME;
  });

  useEffect(() => {
    // Apply theme to CSS variables
    Object.entries(theme.colors).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--color-${key}`, value);
    });
    
    // Apply gradients
    document.documentElement.style.setProperty('--gradient-primary', theme.gradients.primary);
    document.documentElement.style.setProperty('--gradient-secondary', theme.gradients.secondary);
    
    // Save to localStorage
    localStorage.setItem('selectedTheme', theme.id);
  }, [theme]);

  const switchTheme = (themeId) => {
    const newTheme = THEMES[themeId.toUpperCase()];
    if (newTheme) {
      setTheme(newTheme);
    }
  };

  const value = {
    theme,
    themes: THEMES,
    switchTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};