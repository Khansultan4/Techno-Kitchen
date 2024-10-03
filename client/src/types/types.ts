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
  Type?: unknown;
}

export interface IUser {
  id: number;
  username: string;
  email: string;
  role: string;
}

export interface IAuth {
  username?: string;
  email: string;
  password: string;
}
