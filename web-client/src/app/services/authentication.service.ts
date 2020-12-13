import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';
import { User } from '../Models/user';


const jwtHelper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {  
  private currentUserSubject: BehaviorSubject<User>;
  //  Who is the current user  ?!
  public currentUser: Observable<User>;
  
  rootAuthUrl = "http://localhost:3000/api/auth";
  
  constructor(private http: HttpClient ,private JwtHelper:JwtHelperService) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  
  

  login(email: string, password: string) {
      return this.http.post<any>(`${this.rootAuthUrl}/logIn`, { email, password})
          .pipe( map(user => {
              // login successful if there's a jwt token in the response
              if (user && user.data.token) {
                  // store user details and jwt token in local storage to keep user logged in between page refreshes
                  localStorage.setItem('currentUser', JSON.stringify(user.data.token)); 
                  this.currentUserSubject.next(user);
                  return user;
              }

             
          }));
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
  }
  
  // ...
 isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    console.log(token)
    return !this.JwtHelper.isTokenExpired(token);
  }
  
}
