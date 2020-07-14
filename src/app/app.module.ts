import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from'@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ChartsModule } from 'ng2-charts';



import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { appRoutes } from './routes';
import { UserService } from './shared/user.service';
import { MapdisplayComponent } from './home/mapdisplay/mapdisplay.component';
import { DetailsComponent } from './home/details/details.component';
import { UserListComponent } from './home/details/user-list/user-list.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';






@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    MapdisplayComponent,
    DetailsComponent,
    UserListComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    StorageServiceModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ChartsModule,
    RouterModule.forRoot(appRoutes)
    ],
  providers: [ UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }