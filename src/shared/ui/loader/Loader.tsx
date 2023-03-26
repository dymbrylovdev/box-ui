import React, { FC } from 'react';
import { ClassNames } from 'shared/lib/halpers/classNames';
import './Loader.scss';

interface IProps {
  className?: any;
}

const Loader: FC<IProps> = ({ className }) => (
  <div className={ClassNames('lds-roller', {}, [className])}>
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
