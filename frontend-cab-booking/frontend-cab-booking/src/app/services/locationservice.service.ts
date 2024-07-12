// locationservice.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '../models/Location';

@Injectable({
  providedIn: 'root'
})
export class LocationserviceService {

  private baseUrl = 'http://localhost:8080/api/locations'; // Ensure this is the correct URL

  constructor(private http: HttpClient) { }

  saveLocation(location: Location): Observable<any> {
    return this.http.post(this.baseUrl, location);
  }
}
