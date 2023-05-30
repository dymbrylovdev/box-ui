import React, { FC } from 'react';
import { Loader } from 'shared/ui';
import { ClassNames } from 'shared/lib';
import cls from './LoaderPage.module.scss';

interface IProps {
  className?: any;
}

const LoaderPage: FC<IProps> = ({ className }) => (
  <div className={ClassNames(cls.container, {}, [className])}>
    <Loader />
  </div>
);

export default LoaderPage;
