export interface IUser {
  id: number;
  username: string;
  email: string;
}

export interface IAuth {
  username?: string;
  email: string;
  password: string;
}
