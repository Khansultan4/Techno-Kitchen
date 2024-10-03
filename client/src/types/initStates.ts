import { IBuild, IConfiguratorBuild, IItem, IRating, IType, IComment, IUser, IAuth } from "./types";

export const initUserState: IUser = {
  id: 0,
  username: '',
  email: '',
  role: 'user'
};

export const initAuthState: IAuth = { username: '', email: '', password: '' };

export const initRating: IRating = {
  id: 0,
  score: 0,
  BuildId: 0,
  UserId: 0,
  createdAt: '',
  updatedAt: '',
};

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

export const initComment: IComment = {
  id: 0,
  UserId: 0,
  BuildId: 0,
  content: '',
  createdAt: '',
  updatedAt: '',
}
export const initBuild: IBuild = {
    id: 0,
    title: '',
    image: '',
    Ratings: [initRating],
    description: '',
    UserId: 0,
    createdAt: '',
    updatedAt: '',
    Items: [initItem],
    Comments: [initComment],
    Owner: initUserState
  };
  

  export const initConfiguratorBuild:IConfiguratorBuild = {
    UserId: 0,
    title: 'сборка',
    description: 'в разработке',
    Items: [initItem]
  }