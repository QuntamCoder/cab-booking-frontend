import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  baseUrl="http://localhost:8082";
  
  constructor(private http:HttpClient) { }

  getAllPlayer():any{
    return this.http.get(`${this.baseUrl}/getAll`);
  }


  createPlayer(player:Object):Observable<Object>{

    return this.http.post(`${this.baseUrl}/save`,player);
  }

  deletePlayer(id:number):Observable<any>{

    console.log("inside service")
    return this.http.delete(`${this.baseUrl}/deletePlayer/${id}`,{responseType:'text'});
  }


  searchPlayer(id:number):Observable<any>
  {
    return this.http.get(`${this.baseUrl}/get/${id}`);
  }

  updatePlayer(player:object):Observable<object>
  {
    return  this.http.put(`${this.baseUrl}/updatePlayer`,player)
  }
}
