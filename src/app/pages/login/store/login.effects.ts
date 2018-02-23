import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import { Actions, Effect } from '@ngrx/effects';

import * as LoginActions from './login.actions';
import { Store } from '@ngrx/store';
import {
  withLatestFrom,
  mergeMap,
  catchError,
  switchMap,
  map
} from 'rxjs/operators';
import 'rxjs/add/operator/do';
import { LoginState } from './login.reducer';
import { of } from 'rxjs/observable/of';
import { query } from '@angular/core/src/animation/dsl';
import { AuthorizationService } from '../../../common/services/authorization/authorization.service';
import { Router } from '@angular/router';

export type Action = LoginActions.All;

@Injectable()
export class LoginEffects {
  constructor(
    private actions: Actions,
    private authService: AuthorizationService,
    private store: Store<any>,
    private router: Router
  ) {}

  @Effect()
  login$ = this.actions
    .ofType(LoginActions.LOGIN)
    // .switchMap((action: LoginActions.Login) => {
    //   let mappedActions = [];
    //   mappedActions.push(new LoginActions.LoginSuccess({ loggedIn: true }));
    //   if (action.payload.onCompleteActions) {
    //     mappedActions = mappedActions.concat(action.payload.onCompleteActions);
    //   }

    //   return this.authService
    //     .Login(action.payload.login, action.payload.password)
    //     .mergeMap(mappedActions)
    //     .catch(error => {
    //       console.log(error);
    //       return of();
    //     });
    // });

    .map((action: LoginActions.Login) => action.payload)
    .switchMap(creds => {
      return this.authService.Login(creds.login, creds.password);
    })
    .map(token => {
      localStorage.setItem('token', token);
      return new LoginActions.LoginSuccess({ name, token });
    })
    .catch(error => {
      console.log(error);
      return of();
    });

  @Effect()
  getUserInfo$ = this.actions
    .ofType(LoginActions.GET_USER_INFO)
    .map((action: LoginActions.GetUserInfo) => action.payload)
    .switchMap(_ => this.authService.GetUserInfo())
    .map(name => new LoginActions.GetUserInfoSuccess(name));

  @Effect()
  logout$ = this.actions
    .ofType(LoginActions.LOGOUT)
    .map((action: LoginActions.Logout) => action.payload)
    .switchMap(_ => of(this.authService.Logout()))
    .map(_ => new LoginActions.LogoutSuccess());
}
