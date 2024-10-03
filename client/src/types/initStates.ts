import { IBuild, IConfiguratorBuild, IItem, IRatings, IType } from "./types";

export const initRating: IRatings = {
  id: 0,
  score: 0,
  BuildId: 0,
  UserId: 0,
  createdAt: '',
  updatedAt: '',
};

export const initBuild: IBuild = {
    id: 0,
    title: '',
    image: '',
    Ratings: [initRating],
    description: '',
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
  
  export const initConfiguratorBuild:IConfiguratorBuild = {
    UserId: 0,
    title: 'сборка',
    description: 'в разработке'
  }