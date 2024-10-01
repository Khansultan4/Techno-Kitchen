import { IAuth, IUser } from "../types/stateTypes";

export const initUserState: IUser = {
  id: 0,
  name: "",
  email: "",
};

export const initAuthState: IAuth = { name: "", email: "", password: "" };
