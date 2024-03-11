import React, { FC } from 'react';
import { Themes, useTheme } from 'features/Theme';
import { Button } from 'shared/ui';
import { ThemeDarkSVG, ThemeLightSVG } from 'shared/assets';
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib';

interface IProps {
  className?: any;
}

export const ThemeButton: FC<IProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      size={ButtonSize.XL}
      onClick={toggleTheme}
      className={classNames('', {}, [className])}
    >
      {theme === Themes.DARK ? <ThemeDarkSVG /> : <ThemeLightSVG />}
    </Button>
  );
};
