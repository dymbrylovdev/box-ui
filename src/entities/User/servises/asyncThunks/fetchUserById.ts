import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { IUser } from '../../model/types/userSchema';

interface LoginByUsernameProps {
  userId: number
}

export const fetchUserById = createAsyncThunk<IUser[], LoginByUsernameProps, ThunkConfig<string>>(
  'user/fetchByIdStatus',
  async (user, { extra, rejectWithValue }) => {
    const response = await extra.api.get<IUser[]>('http://localhost:8000/users');
    console.log(response.data);
    return response.data;
  },
);
