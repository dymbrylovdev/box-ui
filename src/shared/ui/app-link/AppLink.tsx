import React, { FC } from 'react';
import { ClassNames } from 'shared/lib/halpers/classNames';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface IProps extends LinkProps {
  className?: any;
  theme?: AppLinkTheme;
}

export const AppLink: FC<IProps> = (props) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.SECONDARY,
  } = props;

  return (
    <Link
      to={to}
      className={ClassNames(cls.appLink, {}, [className, cls[theme]])}
    >
      {children}
    </Link>
  );
};
