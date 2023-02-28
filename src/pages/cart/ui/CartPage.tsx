import React, { FC } from 'react';
import { ClassNames } from 'shared/lib/halpers/classNames';
import { useTranslation } from 'react-i18next';

interface IProps {
  className?: any;
}

const CartPage: FC<IProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={ClassNames('', {}, [className])}>
      {t('CARD')}
    </div>
  );
};

export default CartPage;
