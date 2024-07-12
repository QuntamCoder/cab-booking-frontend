import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/users/login'; // Adjust as needed
  private loggedInSubject = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    // Check authentication status on initialization
    this.checkAuthStatus();
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.baseUrl, { name: username, password: password }).pipe(
      tap(() => this.loggedInSubject.next(true))
    );
  }

  logout(): void {
    // Perform logout tasks if needed
    this.loggedInSubject.next(false);
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedInSubject.asObservable();
  }

  private checkAuthStatus(): void {
    // Implement logic to check if user is authenticated, e.g., by checking tokens in localStorage
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    this.loggedInSubject.next(isLoggedIn);
  }
}
