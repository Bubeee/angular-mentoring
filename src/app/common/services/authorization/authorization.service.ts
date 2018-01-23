import { Injectable, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import {
  Http,
  Request,
  Response,
  RequestOptions,
  RequestMethod,
  URLSearchParams
} from '@angular/http';
import { environment } from '../../../../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

class LoginResponse {
  token: string;
}

class UserResponse {
  login: string;
}

@Injectable()
export class AuthorizationService implements OnInit {
  public logins: ReplaySubject<string> = new ReplaySubject(1);

  ngOnInit(): void {
    this.GetUserInfo();
  }

  constructor(private _http: HttpClient) {}

  public Login(name: string, password: string) {
    const loginUrl = `${environment.apiEndpoints.api}/auth/login`;

    return this._http
      .post<LoginResponse>(loginUrl, {
        login: name,
        password: password
      })
      .subscribe(
        (res: LoginResponse) => {
          console.log(res);
          localStorage.setItem('currentToken', res.token);
          this.logins.next(name);
        },
        err => {
          console.log('Error occured');
        }
      );
  }

  public Logout() {
    localStorage.setItem('currentToken', '');
    this.logins.next('');
  }

  public IsAuthenticated(): boolean {
    if (!localStorage.getItem('currentToken')) {
      return false;
    }

    return true;
  }

  GetUserInfo() {
    if (this.IsAuthenticated()) {
      const loginUrl = `${environment.apiEndpoints.api}/auth/userinfo`;

      return this._http
        .post<UserResponse>(
          loginUrl,
          {},
          {
            headers: {
              Authorization: localStorage.getItem('currentToken')
            }
          }
        )
        .subscribe(
          (res: UserResponse) => {
            console.log(res);
            this.logins.next(res.login);
          },
          err => {
            console.log('Error occured');
          }
        );
    }
  }
}
