import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../../services/userservice.service';
import { Router } from '@angular/router';
import { User } from '../../models/User';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.css'
})
export class AdduserComponent implements OnInit {
  submitted = false;
  users: User = new User();

  constructor(private service: UserserviceService, private router: Router) { }

  ngOnInit(): void {
    // Initialize component if needed
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  save() {
    this.service.addUser(this.users).subscribe(
      response => {
        console.log('User added successfully', response);
        // Handle success (e.g., navigate to another page or show a success message)
      },
      error => {
        console.error('Error adding user', error);
        // Handle error (e.g., show an error message to the user)
      }
    );
  }
}
