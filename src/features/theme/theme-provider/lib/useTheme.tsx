import { useContext } from 'react';
import { THEME_STORAGE_KEY, ThemeContext } from '../ui/ThemeProvider';
import { Themes } from './constants';

interface IUseResult {
  theme: Themes,
  toggleTheme: () => void;
}

export const useTheme = () : IUseResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Themes.LIGHT
      ? Themes.DARK : Themes.LIGHT;
    localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    setTheme(newTheme);
  };

  return { theme, toggleTheme };
};
