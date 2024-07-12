import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Driver } from '../../models/Driver';
import { DriverService } from '../../services/driver.service';

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.css']
})
export class AddDriverComponent implements OnInit {
  driver: Driver = new Driver();

  constructor(private driverService: DriverService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.driverService.addDriver(this.driver)
        .subscribe(
          response => {
            console.log('Driver added successfully:', response);
            alert('Driver added successfully');
            // Reset the form after successful submission
            form.resetForm();
          },
          error => {
            console.error('Error adding driver:', error);
          }
        );
    }
  }
}
