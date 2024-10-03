import { IConfiguratorBuild, IItem, IType } from '../../types/types';
import { IAuth, IUser } from '../types/stateTypes';

export const initUserState: IUser = {
  id: 0,
  username: '',
  email: '',
};

export const initAuthState: IAuth = { username: '', email: '', password: '' };

export const initType: IType = {
  id: 0,
  title: '',
  createdAt: '',
  updatedAt: '',
};

export const initItem: IItem = {
  id: 0,
  title: '',
  image: '',
  specifications: Object(),
  TypeId: 0,
  Type: initType,
  price: 0,
  description: '',
  createdAt: '',
  updatedAt: '',
};

export const initConfiguratorBuild:IConfiguratorBuild = {
  UserId: 0,
  title: '',
  description: ''
}

