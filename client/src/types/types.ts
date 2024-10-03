export interface IItem {
  id: number;
  title: string;
  image: string;
  specifications: object;
  TypeId: number;
  price: number;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  Type: IType;
}

export interface IType {
  id: number;
  title: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IConfiguratorBuild {
  UserId: number,
  title: string,
  description:string,
}

export interface IBuild extends IConfiguratorBuild {
  id: number,
  image: string,
  createdAt: Date;
  updatedAt: Date;
}
