import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  
   
    rootAuthUrl = "http://localhost:3000/api/auth";
    rootUserUrl =""
    getAll() {
        return this.http.get<User[]>(`${this.rootUserUrl}/users`);
    }

    getById(id: number) {
        return this.http.get(`${this.rootUserUrl}/users/` + id);
    }

    register(user: User) {
        return this.http.post(`${this.rootAuthUrl}/signUp`, user);
    }

    update(user: User) {
        return this.http.put(`${this.rootUserUrl}/users/` + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(`${this.rootUserUrl}/users/` + id);
    }
}
