import { IItem } from '../../types/types';
import { IAuth, IUser } from '../types/stateTypes';

export const initUserState: IUser = {
  id: 0,
  username: '',
  email: '',
};

export const initAuthState: IAuth = { username: '', email: '', password: '' };

export const initItem:IItem = {
  id: 0,
  title: '',
  image: '',
  specifications: Object(),
  TypeId: 0,
  price: 0,
  description: '',
  createdAt: new Date(0),
  updatedAt: new Date(0),
  }