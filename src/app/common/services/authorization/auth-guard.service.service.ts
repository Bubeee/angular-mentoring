import { Injectable } from '@angular/core';
import { AuthorizationService } from './authorization.service';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthorizationService, public router: Router) {}
  canActivate(): boolean {
    if (!this.auth.IsAuthenticated()) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
