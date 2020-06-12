import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
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
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent,outlet:'register' }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent,outlet:'signin' }]
    },
   { path : '', redirectTo:'/login', pathMatch : 'full'}
    
];  