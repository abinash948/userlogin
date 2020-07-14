import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { MapdisplayComponent } from './home/mapdisplay/mapdisplay.component';
import { DetailsComponent } from './home/details/details.component';
import { UserListComponent } from './home/details/user-list/user-list.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';



export const appRoutes: Routes = [
    { 
      path: 'home', component: HomeComponent,
        children: [ 
            { path:'',component: MapdisplayComponent },
            { 
              path: 'details', 
               children: [
                   {  path: '',component: DetailsComponent},
                   {  path: 'userlist', component: UserListComponent }
                ] 
            },
            { path:'dashboard',component: DashboardComponent}
        ]
    },
    {
        path: 'login', component: UserComponent
    },
   { path : '', redirectTo:'/login', pathMatch : 'full'},
    
];  