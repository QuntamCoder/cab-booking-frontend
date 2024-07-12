import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Driver } from '../models/Driver';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  private baseUrl = 'http://localhost:8080/api/drivers'; // Adjust as per your backend API URL

  constructor(private http: HttpClient) {}

  addDriver(driver: Driver): Observable<Driver> {
    return this.http.post<Driver>(`${this.baseUrl}`, driver);
  }
  getAllDrivers(): Observable<Driver[]> {
    return this.http.get<Driver[]>(`${this.baseUrl}`);
  }
  deleteDriver(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
  updateDriver(id: number, driver: Driver): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, driver);
  }
  getDriverById(id: number): Observable<Driver> {
    return this.http.get<Driver>(`${this.baseUrl}/${id}`);
  }

}
