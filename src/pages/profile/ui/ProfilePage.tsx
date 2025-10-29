import { useTranslation } from 'react-i18next';
import { userReducer } from 'entities/User';
import { classNames, DynamicModuleLoader, ReducersList } from 'shared/lib';

const reducers: ReducersList = {
  user: userReducer,
};
interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation();

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        {t('Профиль')}
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
