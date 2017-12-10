import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class AuthorizationService {
  private _currentLogin: User;

  constructor() {}
  public Login(name: string) {
    this._currentLogin.Name = name;
  }

  public Logout() {
    this._currentLogin.Name = '';
    this._currentLogin.Token = '';
  }

  public IsAuthenticated(): boolean {
    return this._currentLogin.Name !== '' && this._currentLogin.Token !== '';
  }

  public GetUserInfo(): string {
    return this._currentLogin.Name;
  }
}
