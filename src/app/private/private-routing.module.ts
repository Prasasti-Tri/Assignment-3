import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { DetailsComponent } from './details/details.component';
import { FaqsComponent } from './faqs/faqs.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { UpcomingBookingsComponent } from './upcoming-bookings/upcoming-bookings.component';
import { PastBookingsComponent } from './past-bookings/past-bookings.component';
import { AuthService } from './privateServices/auth.service';


const routes: Routes = [
  { path: 'navbar',
   component: NavbarComponent,
   canActivate: [AuthService],
   children: [
     { path: 'details', component: DetailsComponent} ,
     { path: 'faqs', component: FaqsComponent} ,
     { path: 'mybookings', 
       component: MyBookingsComponent,
       children:[
         { path: 'upcoming', component: UpcomingBookingsComponent},
         { path: 'past', component: PastBookingsComponent}
       ]
      
    }
   ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
