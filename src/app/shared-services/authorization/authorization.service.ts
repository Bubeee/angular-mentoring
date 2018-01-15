import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class AuthorizationService {
  public logins: ReplaySubject<string> = new ReplaySubject();

  constructor() {}
  public Login(name: string, password: string) {
    localStorage.setItem('currentLogin', name);
    localStorage.setItem('currentToken', this.GenerateToken(password));
    this.logins.next(name);
  }

  public Logout() {
    localStorage.setItem('currentLogin', '');
    localStorage.setItem('currentToken', '');
    this.logins.next('');
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
