import React, {FC} from 'react';
import {ClassNames} from "shared/lib/halpers/classNames";
import cls from './LangSwitcher.module.scss';
import i18n from "i18next";
import {useTranslation} from "react-i18next";

interface IProps {
  className?: any;
}

export const LangSwitcher: FC<IProps> = ({className}) => {
  const { t } = useTranslation();

  const toggleTranslate = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <button
      onClick={toggleTranslate}
      className={ClassNames(cls.langSwitcher,{},[className])}>
      {t('LANG')}
    </button>
  );
};
