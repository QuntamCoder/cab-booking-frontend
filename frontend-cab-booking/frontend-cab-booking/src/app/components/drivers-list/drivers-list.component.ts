import { Component, OnInit } from '@angular/core';
import { Driver } from '../../models/Driver';
import { DriverService } from '../../services/driver.service';
@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit {
  drivers: Driver[] = []; // Initialize with an empty array

  constructor(private driverService: DriverService) {}

  ngOnInit(): void {
    this.loadDrivers();
  }

  loadDrivers(): void {
    this.driverService.getAllDrivers()
      .subscribe(
        drivers => {
          this.drivers = drivers;
        },
        error => {
          console.error('Error fetching drivers:', error);
        }
      );
  }

  deleteDriverConfirmation(id: number): void {
    this.driverService.deleteDriver(id)
      .subscribe(
        () => {
          console.log('Driver deleted successfully');
          // Reload drivers after deletion
          this.loadDrivers();
        },
        error => {
          console.error('Error deleting driver:', error);
        }
      );
  }

  updateDriver(id: number): void {
    // Navigate to update driver component with the specific driver id
    // Example: this.router.navigate(['/update-driver', id]);
  }
}
