import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthorizationService } from '../../common/services/authorization/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUserName: string;
  constructor(
    private _authorizationService: AuthorizationService,
    private _router: Router
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
    this._authorizationService.logins.subscribe(
      login => (this.currentUserName = login)
    );

    if (this.isAuthenticated()) {
      this._authorizationService.GetUserInfo();
    }
  }
}
