import React, { FC } from 'react';
import { ClassNames } from 'shared/lib';
import cls from './Loader.module.scss';

export enum ThemeLoader {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface IProps {
  className?: any;
  theme?: ThemeLoader;
}

const Loader: FC<IProps> = ({ className, theme }) => (
  <div className={ClassNames(cls.ldsRoller, {}, [className, cls[theme]])}>
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

export default Loader;
