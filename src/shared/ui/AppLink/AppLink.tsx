import React, { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  REVERT_PRIMARY = 'revert_primary',
  REVERT_SECONDARY = 'revert_secondary',
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
      className={classNames(cls.appLink, {}, [className, cls[theme]])}
    >
      {children}
    </Link>
  );
};
