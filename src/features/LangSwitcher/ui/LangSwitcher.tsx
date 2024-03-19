import React, { FC } from 'react';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui';
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib';

interface IProps {
  className?: any;
}

export const LangSwitcher: FC<IProps> = ({ className }) => {
  const { t } = useTranslation();

  const toggleTranslate = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      theme={ButtonTheme.BACKGROUND_INVERTED}
      size={ButtonSize.L}
      onClick={toggleTranslate}
      className={classNames('', {}, [className])}
    >
      {t('Язык')}
    </Button>
  );
};
