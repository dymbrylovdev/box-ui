import {
  FC, memo, useEffect,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, DynamicModuleLoader, ReducersList } from 'shared/lib';
import { useDispatch, useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { fetchUserById, useGetUsersQuery, userReducer } from 'entities/User';

interface IProps {
  className?: any;
}

const initialReducers: ReducersList = {
  user: userReducer,
};

const MainPage: FC<IProps> = ({ className }) => {
  const { t } = useTranslation();
  const users = useSelector((state: StateSchema) => state?.user?.userList);
  const dispatch = useDispatch();
  // const { data: usersList, isLoading: isLoadingUsers } = useGetUsersQuery();

  useEffect(() => {
    dispatch(fetchUserById({ userId: 1 }));
  }, [dispatch]);

  // console.log('usersList', usersList);

  return (
    <DynamicModuleLoader
      removeAfterUnmount
      reducers={initialReducers}
    >
      <div className={classNames('', {}, [className])}>
        {Array.isArray(users) && users.map((user) => (
          <div key={user.id}>
            {user.username}
          </div>
        ))}
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(MainPage);
