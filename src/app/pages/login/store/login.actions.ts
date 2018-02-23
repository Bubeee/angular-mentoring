import { Action } from '@ngrx/store';

export const LOGIN = '[Auth] LOGIN';
export const LOGIN_SUCCESS = '[Auth] LOGIN_SUCCESS';
export const LOGIN_SUCCESS_REDIRECT = '[Auth] LOGIN_SUCCESS_REDIRECT';

export const LOGOUT = '[Auth] LOGOUT';
export const LOGOUT_SUCCESS = '[Auth] LOGOUT_SUCCESS';

export const GET_USER_INFO = '[Auth] GET_USER_INFO';
export const GET_USER_INFO_SUCCESS = '[Auth] GET_USER_INFO_SUCCESS';

export class Login implements Action {
  readonly type = LOGIN;

  constructor(public payload?) {}
}

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;

  constructor(public payload?) {}
}

export class LoginSuccessRedirect implements Action {
  readonly type = LOGIN_SUCCESS_REDIRECT;

  constructor(public payload?) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;

  constructor(public payload?) {}
}

export class LogoutSuccess implements Action {
  readonly type = LOGOUT_SUCCESS;

  constructor(public payload?) {}
}

export class GetUserInfo implements Action {
  readonly type = GET_USER_INFO;

  constructor(public payload?) {}
}

export class GetUserInfoSuccess implements Action {
  readonly type = GET_USER_INFO_SUCCESS;

  constructor(public payload) {}
}

export type All =
  | Login
  | LoginSuccess
  | Logout
  | LogoutSuccess
  | GetUserInfo
  | GetUserInfoSuccess;
