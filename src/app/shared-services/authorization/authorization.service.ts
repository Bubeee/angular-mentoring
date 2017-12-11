import { Injectable } from '@angular/core';

@Injectable()
export class AuthorizationService {
  constructor() {}
  public Login(name: string, password: string) {
    localStorage.setItem('currentLogin', name);
    localStorage.setItem('currentToken', this.GenerateToken(password));
  }

  public Logout() {
    localStorage.setItem('currentLogin', '');
    localStorage.setItem('currentToken', '');
  }

  public IsAuthenticated(): boolean {
    if (localStorage.getItem('currentLogin') === undefined || localStorage.getItem('currentLogin') === '') {
      return false;
    }

    return true;
  }

  public GetUserInfo(): string {
    return localStorage.getItem('currentLogin');
  }

  private GenerateToken(password: string): string {
    let hash = 0, i, chr;

    for (i = 0; i < password.length; i++) {
      chr = password.charCodeAt(i);
      // tslint:disable-next-line:no-bitwise
      hash = (hash << 5) - hash + chr;
      // tslint:disable-next-line:no-bitwise
      hash |= 0;
    }

    return hash.toString();
  }
}
