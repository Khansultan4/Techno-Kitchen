import { IAuth, IUser } from '../types/stateTypes';

export const initUserState: IUser = {
  id: 0,
  username: '',
  email: '',
};

export const initAuthState: IAuth = { username: '', email: '', password: '' };
