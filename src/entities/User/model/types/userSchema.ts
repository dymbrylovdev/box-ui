import { Country, Currency } from 'shared/constants/common';

export interface UserSchema {
  user: IUser | null;
  userList: IUser[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  readonly: boolean;
  error?: string;
}

export interface IUser {
  id: number;
  username: number;
  first: string;
  lastname: string;
  age: number;
  currency: Currency;
  country: Country;
  city: string;
  avatar: string;
}

export interface ProfileSchema {
  data?: IUser;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
}
