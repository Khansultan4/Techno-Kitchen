export interface IItem {
  id: number;
  title: string;
  image: string;
  specifications: object;
  TypeId: number;
  price: number;
  description: string;
  createdAt: string;
  updatedAt: string;
  Type: IType;
}

export interface IType {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
}

export interface IConfiguratorBuild {
  UserId: number;
  title: string;
  description: string;
}

export interface IBuild extends IConfiguratorBuild {
  id: number;
  image: string;
  Ratings: IRatings[];
  createdAt: string;
  updatedAt: string;
}
export interface IRatings {
  id: number;
  score: number;
  UserId: number;
  BuildId: number;
  createdAt: string;
  updatedAt: string;
}
