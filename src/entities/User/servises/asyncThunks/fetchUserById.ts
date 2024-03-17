import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUser } from '../../model/types/userSchema';

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
