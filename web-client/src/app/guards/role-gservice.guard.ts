
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../services';
import decode from 'jwt-decode';

@Injectable()

export class RoleGuardService implements CanActivate {
  constructor(public auth: AuthenticationService, public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data.expectedRole;
    console.log(expectedRole)
    const token = localStorage.getItem('token');
    // decode the token to get its payload
    const tokenPayload = decode(token);
    if (
    true
    //  !this.auth.isAuthenticated() ||  tokenPayload.role !== expectedRole
    ) {
    console.log(tokenPayload)
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
