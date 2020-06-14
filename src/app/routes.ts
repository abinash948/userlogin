import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { MapdisplayComponent } from './home/mapdisplay/mapdisplay.component';
import { DetailsComponent } from './home/details/details.component';
import { UserListComponent } from './home/user-list/user-list.component';



export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent,
      children: 
      [{path:'',component: MapdisplayComponent},
      { path: 'details', component: DetailsComponent},
      { path: 'userlist', component: UserListComponent}]
    },
    {
        path: 'login', component: UserComponent
    },
   { path : '', redirectTo:'/login', pathMatch : 'full'},
    
];  