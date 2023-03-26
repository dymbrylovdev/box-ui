import React, { FC } from 'react';
import { ClassNames } from 'shared/lib/halpers/classNames';
import Loader from 'shared/ui/loader/Loader';
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
