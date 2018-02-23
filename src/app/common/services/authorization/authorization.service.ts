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
  name: string;
}

@Injectable()
export class AuthorizationService implements OnInit {
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
      .map((response: LoginResponse) => response.token);
    // .subscribe(
    //   (res: LoginResponse) => {
    //     console.log(res);
    //     localStorage.setItem('token', res.token);
    //     this.logins.next(name);
    //   },
    //   err => {
    //     console.log(`Error occured ${err}`);
    //   }
    // );
  }

  public Logout() {
    localStorage.setItem('token', '');
  }

  public IsAuthenticated(): boolean {
    if (!localStorage.getItem('token')) {
      return false;
    }

    return true;
  }

  GetUserInfo() {
    if (this.IsAuthenticated()) {
      const loginUrl = `${environment.apiEndpoints.api}/auth/userinfo`;

      return this._http
        .post<UserResponse>(loginUrl, {})
        .map((response: UserResponse) => response.name);
    }
  }
}
