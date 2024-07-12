import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '../../models/Location';
import { LocationserviceService } from '../../services/locationservice.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  locations: Location = new Location();
  isBooking: boolean = false;

  constructor(private router: Router, private service: LocationserviceService) {}

  onSubmit() {
    this.service.saveLocation(this.locations).subscribe(
      response => {
        console.log('Location added successfully', response);
        // Navigate to the booking component upon successful save
        this.router.navigate(['/booking']);
        // Set isBooking to true to hide the location form and show the booking form
        this.isBooking = true;
      },
      error => {
        console.error('Error adding location', error);
        // Handle error if needed
      }
    );
  }
}
