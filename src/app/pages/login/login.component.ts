import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../common/services/authorization/authorization.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as LoginActions from './store/login.actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private _authorizationService: AuthorizationService,
    private router: Router,
    private _formBuilder: FormBuilder,
    private store: Store<any>
  ) {}

  ngOnInit() {
    // this._authorizationService.logins.subscribe(name =>
    //   this.router.navigate(['courses'])
    // );

    this.loginForm = this._formBuilder.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit({
    value,
    valid
  }: {
    value: { login: string; password: string };
    valid: boolean;
  }) {
    this.store.dispatch(
      new LoginActions.Login({
        login: value.login,
        password: value.password
      })
    );
    this.router.navigate(['courses']);
  }
}
