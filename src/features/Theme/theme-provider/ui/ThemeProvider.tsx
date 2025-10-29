import React, { createContext, useMemo, useState } from 'react';
import { Themes } from '../lib/constants';
import { ThemeProps } from '../types';

export const THEME_STORAGE_KEY = 'theme';

export const getThemeFromStorage = (): Themes => {
  const theme = localStorage.getItem(THEME_STORAGE_KEY);
  if (theme === Themes.DARK || theme === Themes.LIGHT) {
    return theme as Themes;
  }
  return Themes.LIGHT;
};

export const defaultValue = getThemeFromStorage();

export const ThemeContext = createContext<ThemeProps>({
  theme: defaultValue,
});

interface IProps {
  children: React.ReactNode;
  initialTheme?: Themes;
}

export const ThemeProvider: React.FC<IProps> = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState<Themes>(initialTheme || defaultValue);

  const initialProps = useMemo<ThemeProps>(() => ({
    theme,
    // @ts-ignore
    setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={initialProps}>
      {children}
    </ThemeContext.Provider>
  );
};
