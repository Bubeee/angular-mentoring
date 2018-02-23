import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthorizationService } from '../../common/services/authorization/authorization.service';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as LoginActions from '../../pages/login/store/login.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUserName: Observable<string>;
  constructor(
    private _authorizationService: AuthorizationService,
    private _router: Router,
    private store: Store<any>
  ) {}

  isNotOnLoginPage(): boolean {
    return this._router.url !== '/login';
  }

  isAuthenticated(): boolean {
    return this._authorizationService.IsAuthenticated();
  }

  ngOnInit() {
    this._router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        this.fetchUserInfo();
      }
    });
  }

  logoff() {
    if (this.isAuthenticated()) {
      this._authorizationService.Logout();
    }
  }

  private fetchUserInfo() {
    this.currentUserName = this.store.select(state => state.Auth.name);

    if (this.isAuthenticated()) {
      this.store.dispatch(new LoginActions.GetUserInfo());
    }
  }
}
