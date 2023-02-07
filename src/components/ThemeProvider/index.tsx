import React, {createContext, useMemo, useState} from 'react';
import {Themes} from "../../constants/constants";

interface IProps {
  children: React.ReactNode;
}
type ThemeProps = {
  theme: Themes,
  setTheme: (theme: Themes) => void;
}

export const THEME_STORAGE_KEY = "theme";

export const ThemeContext = createContext<ThemeProps | null>(null);

export const defaultValue = localStorage.getItem(THEME_STORAGE_KEY) as Themes || Themes.LIGHT;

const ThemeProvider: React.FC<IProps> = ({children}) => {
  const [theme, setTheme] = useState<Themes>(defaultValue);

  const initialProps = useMemo<ThemeProps>(() => ({
    theme: theme,
    setTheme: setTheme,
  }), [theme])

  return (
    <ThemeContext.Provider value={initialProps}>
      {children}
    </ThemeContext.Provider>
  )
};

export default ThemeProvider;
