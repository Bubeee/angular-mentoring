import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthorizationService } from '../../shared-services/authorization/authorization.service';

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
    this._router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        this.fetchUserInfo();
      }
    });
    return this._router.url !== '/login';
  }

  isAuthenticated(): boolean {
    return this._authorizationService.IsAuthenticated();
  }

  ngOnInit() {
    this.fetchUserInfo();
  }

  logoff() {
    if (this.isAuthenticated()) {
      this._authorizationService.Logout();
    }
  }

  private fetchUserInfo() {
    if (this.isAuthenticated()) {
      this._authorizationService.logins.subscribe(
        login => (this.currentUserName = login)
      );

      this._authorizationService.GetUserInfo();
    }
  }
}
