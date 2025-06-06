import { Theme } from "@mui/material";

export interface IUser {
  id: number;
  login: string;
  email: string;
  role: string;
}

export interface IAuth {
  username?: string;
  email: string;
  password: string;
}

export interface IItem {
  id: number;
  title: string;
  image: string;
  specifications: object;
  TypeId: number;
  price: number;
  description: string;
  ItemBundle?: object;
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
  Items: IItem[];
  description: string;
}

export interface IBuild extends IConfiguratorBuild {
  id: number;
  image: string;
  Ratings: IRating[];
  createdAt: string;
  updatedAt: string;
  Comments: IComment[];
  Owner: IUser;
}

export interface IRating {
  id: number;
  score: number;
  UserId: number;
  BuildId: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface IComment {
  id: number;
  UserId: number;
  BuildId: number;
  content: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ISelectedItems {
  CPU: IItem;
  GPU: IItem;
  mother: IItem;
  RAM: IItem[];
  SSD: IItem[];
  cooling: IItem[];
  HHD: IItem[];
  power: IItem;
  case: IItem;
  termo: IItem;
}
export interface Result {
  id: number;
  title: string;
}

export interface IMessage {
  id: number;
  text: string;
  User: IUser;
}
