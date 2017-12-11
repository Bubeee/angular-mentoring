import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../shared-services/authorization/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private _login = '';
  private _password = '';

  constructor(private _authorizationService: AuthorizationService, private router: Router) {}

  ngOnInit() {}

  login(name: string, password: string) {
    this._authorizationService.Login(name, password);
    this.router.navigate(['courses']);
  }
}
