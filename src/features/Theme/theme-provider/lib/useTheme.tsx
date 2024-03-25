import { useContext } from 'react';
import { Themes } from 'features/Theme';
import { THEME_STORAGE_KEY, ThemeContext } from '../ui/ThemeProvider';

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
    setTheme?.(newTheme);
    document.body.className = newTheme;
  };

  return {
    theme,
    toggleTheme,
  };
};
