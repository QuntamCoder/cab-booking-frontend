import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.isLoggedIn().subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
      if (this.isLoggedIn) {
        this.router.navigate(['/index']); // Redirect if already logged in
      }
    });
  }

  onSubmit(): void {
    console.log('Submit button clicked');
    console.log('Username:', this.username);
    console.log('Password:', this.password);

    this.authService.login(this.username, this.password).subscribe((response: any) => {
      if (response.success) {
        this.router.navigate(['/index']);
      } else {
        alert('Invalid credentials');
      }
    }, (error) => {
      console.error('Login error', error);
      if (error.status === 401) {
        alert('Unauthorized: Invalid username or password');
      } else {
        alert('An error occurred during login');
      }
    });
  }
  

}
