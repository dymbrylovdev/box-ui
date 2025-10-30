import { Themes } from './lib/constants';

export type ThemeProps = {
  theme: Themes;
  setTheme?: (theme: Themes) => void;
};
