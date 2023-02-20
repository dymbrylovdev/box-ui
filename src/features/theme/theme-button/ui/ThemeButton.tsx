import React, {FC} from 'react';
import cls from './ThemeButton.module.scss';
import {ClassNames} from "shared/lib/halpers/classNames";
import {Themes} from "features/theme/theme-provider/lib/constants";
import {useTheme} from "features/theme";
import { Button } from 'shared/ui';
import {ThemeDarkSVG, ThemeLightSVG} from "shared/assets";


interface IProps {
  className?: any;
}

export const ThemeButton: FC<IProps> = ({className}) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      className={ClassNames(cls.themeButton,{},[className])}>
      {theme === Themes.DARK ? <ThemeDarkSVG/> : <ThemeLightSVG/>}
    </Button>
  );
};
