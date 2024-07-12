import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PlayerlistComponent } from './components/playerlist/playerlist.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateplayerComponent } from './components/createplayer/createplayer.component';
import { FormsModule } from '@angular/forms';
import { SearchPlayerComponent } from './components/search-player/search-player.component';
import { UpdatePlayerComponent } from './components/update-player/update-player.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { LoginComponent } from './components/login/login.component';
import { LocationComponent } from './components/location/location.component';
import { BookingComponent } from './components/booking/booking.component';
import { AddDriverComponent } from './components/add-driver/add-driver.component';
import { DriversListComponent } from './components/drivers-list/drivers-list.component';
import { UpdateDriverComponent } from './components/update-driver/update-driver.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PlayerlistComponent,
    CreateplayerComponent,
    SearchPlayerComponent,
    UpdatePlayerComponent,
    AdduserComponent,
    LoginComponent,
    LocationComponent,
    BookingComponent,
    AddDriverComponent,
    DriversListComponent,
    UpdateDriverComponent
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
