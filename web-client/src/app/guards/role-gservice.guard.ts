
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../services';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})

export class RoleGuardService implements CanActivate {
  constructor(public auth: AuthenticationService, public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data.expectedRole;
    console.log(expectedRole)
    const token = localStorage.getItem('token');
    // decode the token to get its payload
    console.log(token)
    const tokenPayload = decode(token);
    if ( !this.auth.isAuthenticated() ||  tokenPayload !== expectedRole) {
    console.log(tokenPayload)
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}

