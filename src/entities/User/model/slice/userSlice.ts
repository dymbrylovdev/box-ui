import { createSlice } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localstorage';
import { UserSchema } from '../types/userSchema';
import { fetchUserById } from '../../servises/asyncThunks/fetchUserById';

const initialState: UserSchema = {
  user: null,
  users: [],
  loading: 'idle',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },

    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      if (user) {
        state.user = JSON.parse(user);
      }
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      // Add user to the state array
      state.users = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
