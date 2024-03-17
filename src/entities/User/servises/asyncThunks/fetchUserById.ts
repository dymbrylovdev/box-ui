import { createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit';
import { IUser } from 'entities/User';
import axios from 'axios';

interface LoginByUsernameProps {
  userId: number
}
export const fetchUserById = createAsyncThunk<IUser[], LoginByUsernameProps>(
  'user/fetchByIdStatus',
  async (user, thunkAPI) => {
    const response = await axios.get<IUser[]>('http://localhost:8000/users');
    console.log(response.data);
    return response.data;
  },
);
