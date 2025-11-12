import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { themes } from '../styles/theme';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const currentTheme = useMemo(() => (isDarkMode ? themes.dark : themes.light), [isDarkMode]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');

  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, theme: currentTheme }}>
        {children}
    </ThemeContext.Provider>
  );
};
