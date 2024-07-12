import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Driver } from '../../models/Driver';
import { DriverService } from '../../services/driver.service';

@Component({
  selector: 'app-update-driver',
  templateUrl: './update-driver.component.html',
  styleUrls: ['./update-driver.component.css']
})
export class UpdateDriverComponent implements OnInit {
  driver: Driver = new Driver();
  driverId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private driverService: DriverService
  ) {}

  ngOnInit(): void {
    this.driverId = +this.route.snapshot.paramMap.get('id')!;
    this.loadDriver(this.driverId);
  }

  loadDriver(id: number): void {
    this.driverService.getDriverById(id)
      .subscribe(
        driver => {
          this.driver = driver;
        },
        error => {
          console.error('Error fetching driver:', error);
        }
      );
  }

  updateDriver(): void {
    this.driverService.updateDriver(this.driverId, this.driver)
      .subscribe(
        response => {
          console.log('Driver updated successfully:', response);
          this.router.navigate(['/drivers']); // Navigate to drivers list or another page
        },
        error => {
          console.error('Error updating driver:', error);
        }
      );
  }
}
