import { User } from '../shared/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Donation } from '../shared/donation.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }

  createUser(user: User){
    console.log(user);
    
    return this.http.post("http://localhost:51147//api/register", user); 
  }

  loginUser(user: User){
    return this.http.post("http://localhost:51147//api/login_user", user);
  }
  getRequests(){
    
    return this.http.get("https://localhost:44313//api/showrequest");
  }

  getDonations(){
    return this.http.get("https://localhost:44313//api/donation");
  }

  acceptRequest(donation:Donation){
    return this.http.post("http://localhost:51147//api/donation", donation);
  }
}