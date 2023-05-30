import { Themes } from 'features/theme';

export type ThemeProps = {
  theme?: Themes,
  setTheme?: (theme: Themes) => void;
};
