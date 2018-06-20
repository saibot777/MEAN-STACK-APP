import { Action } from '@ngrx/store';
import {User} from "../user.model";

export enum AuthActionTypes {
  LoginAction = '[Auth] Login',
  RegisterAction = '[Auth] Register',
  LogoutAction = '[Auth] Logout'
}

export class Login implements Action {

  readonly type = AuthActionTypes.LoginAction;

  constructor(public payload: {user: User}) {}
}

export class Register implements Action {

  readonly type = AuthActionTypes.RegisterAction;

  constructor(public payload: {user: User}) {}
}

export class Logout implements Action {

  readonly type = AuthActionTypes.LogoutAction;

}

export type AuthActions =
    Login
  | Register
  | Logout;
