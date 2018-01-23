import { Injectable, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class AuthorizationService implements OnInit {
  public logins: ReplaySubject<string> = new ReplaySubject(1);

  ngOnInit(): void {
    this.GetUserInfo();
  }

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
    if (!localStorage.getItem('currentLogin')) {
      return false;
    }

    return true;
  }

  GetUserInfo() {
    const currentLoginFromStorage = localStorage.getItem('currentLogin');
    this.logins.next(currentLoginFromStorage);
  }

  private GenerateToken(password: string): string {
    let hash = 0,
      i,
      chr;

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
