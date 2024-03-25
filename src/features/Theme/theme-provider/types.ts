import { Themes } from 'features/Theme';

export type ThemeProps = {
  theme: Themes,
  setTheme?: (theme: Themes) => void;
};
