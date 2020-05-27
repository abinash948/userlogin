import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { MapdisplayComponent } from './home/mapdisplay/mapdisplay.component';
import { MarkerinfoComponent } from './home/markerinfo/markerinfo.component';


export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent,
      children: [
          {path:'',component: MapdisplayComponent, outlet:'mapsdisplay',
              children:[{path: 'info',component: MarkerinfoComponent, outlet:'markerinfo'}]   
            }        
      ]
    },
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
   { path : '', redirectTo:'/login', pathMatch : 'full'}
    
];  