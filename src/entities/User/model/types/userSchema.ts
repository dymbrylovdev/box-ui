export interface UserSchema {
  user: IUser | null;
  users: IUser[] | null,
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

export interface IUser {
  id: number;
  username: number;
}
