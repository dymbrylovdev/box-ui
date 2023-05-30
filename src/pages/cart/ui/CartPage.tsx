import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ClassNames } from 'shared/lib';

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
