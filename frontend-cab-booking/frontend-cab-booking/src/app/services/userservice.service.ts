import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private baseUrl = 'http://localhost:8080/api'; // Make sure this is correct
  
  constructor(private http:HttpClient) { }

  getAllPlayer():any{
    return this.http.get(`${this.baseUrl}/getAll`);
  }
  addUser(user: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/users`, user);
  }

}
