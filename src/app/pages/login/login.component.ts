import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../common/services/authorization/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public _login = '';
  public _password = '';

  constructor(
    private _authorizationService: AuthorizationService,
    private router: Router
  ) {}

  ngOnInit() {
    this._authorizationService.logins.subscribe(name =>
      this.router.navigate(['courses'])
    );
  }

  login(name: string, password: string) {
    this._authorizationService.Login(name, password);
  }
}
