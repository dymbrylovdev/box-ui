import React, { FC } from 'react';
import { classNames } from 'shared/lib';
import cls from './Loader.module.scss';

export enum ThemeLoader {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface IProps {
  className?: any;
  theme?: ThemeLoader;
}

export const Loader: FC<IProps> = ({ className, theme = ThemeLoader.PRIMARY }) => (
  <div className={classNames(cls.lds_roller, {}, [className, cls[theme]])}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
);
