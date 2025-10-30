import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { IUser } from '../../model/types/userSchema';

interface LoginByUsernameProps {
  userId: number
}

export const fetchUserById = createAsyncThunk<IUser[], LoginByUsernameProps, ThunkConfig<string>>(
  'user/fetchByIdStatus',
  async (user, { extra, rejectWithValue }) => {
    const response = await extra.api.get<IUser[]>('/users');
    console.log('response.data', response.data);
    return response.data;
  },
);
