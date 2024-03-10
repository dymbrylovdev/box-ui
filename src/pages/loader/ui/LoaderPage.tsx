import React, { FC } from 'react';
import { Loader } from 'shared/ui';
import { classNames } from 'shared/lib';
import cls from './LoaderPage.module.scss';

interface IProps {
  className?: any;
}

const LoaderPage: FC<IProps> = ({ className }) => (
  <div className={classNames(cls.container, {}, [className])}>
    <Loader />
  </div>
);

export default LoaderPage;
