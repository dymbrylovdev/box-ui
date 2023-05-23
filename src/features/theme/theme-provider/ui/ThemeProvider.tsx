import React, { createContext, useMemo, useState } from 'react';
import { Themes } from '../lib/constants';
import { ThemeProps } from '../types';

export const THEME_STORAGE_KEY = 'theme';

export const ThemeContext = createContext<ThemeProps>({});

export const defaultValue = localStorage.getItem(THEME_STORAGE_KEY) as Themes || Themes.LIGHT;

interface IProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<IProps> = ({ children }) => {
  const [theme, setTheme] = useState<Themes>(defaultValue);

  const initialProps = useMemo<ThemeProps>(() => ({
    theme,
    setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={initialProps}>
      {children}
    </ThemeContext.Provider>
  );
};
