import { User } from '../shared/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }

  createUser(user: User){
    console.log(user);
    return this.http.post("https://localhost:44368/api/register", user); 
  }

  loginUser(user: User){
    return this.http.post("https://localhost:44368/api/login", user);
  }
}