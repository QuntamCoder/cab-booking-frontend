import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerlistComponent } from './components/playerlist/playerlist.component';
import { CreateplayerComponent } from './components/createplayer/createplayer.component';
import { SearchPlayerComponent } from './components/search-player/search-player.component';
import { UpdatePlayerComponent } from './components/update-player/update-player.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LocationComponent } from './components/location/location.component';
import { BookingComponent } from './components/booking/booking.component';
import { AddDriverComponent } from './components/add-driver/add-driver.component';
import { DriversListComponent } from './components/drivers-list/drivers-list.component';



const routes: Routes = [
  {
    path:'list',
    component:PlayerlistComponent
  },

  {
    path:'add',
    component:CreateplayerComponent
  }
,
  {
    path:'search/:playerId',
    component:SearchPlayerComponent
  },
  {
    path:'update/:playerId',
    component:UpdatePlayerComponent
  },
  {
    path:'adduser',
    component:AdduserComponent
  },
  { path: 'login', component: LoginComponent },
  { path: 'index', component: NavbarComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path:'booking',
    component:LocationComponent
  }
,  { path: '', redirectTo: '/location', pathMatch: 'full' },
{ path: 'location', component: LocationComponent },
{ path: 'booking', component: BookingComponent }
,
{
  path:'add-driver',
  component:AddDriverComponent
},
{
  path:'show-driver',
  component:DriversListComponent
}
,  {
  path:'add-user',
  component:AdduserComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
