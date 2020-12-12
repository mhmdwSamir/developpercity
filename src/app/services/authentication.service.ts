import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../Models/user';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {  
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  rootAuthUrl = "http://localhost:3000/api/auth";
  
  constructor(private http: HttpClient) {
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
}
