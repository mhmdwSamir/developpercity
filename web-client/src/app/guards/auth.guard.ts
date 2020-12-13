import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
    {
      if (localStorage.getItem('currentUser')) {
        // logged in so return true
        console.log(localStorage.getItem('currentUser'))
        return true;  
    }
     // not logged in so redirect to login page 
     // from you Where 
     this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
     return false;
  }
}
