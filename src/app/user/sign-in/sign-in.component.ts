import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/user.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],

})
export class SignInComponent implements OnInit {

   signinForm: FormGroup;
   loginUserName: string;
   password: string;
   isLoginError = false;
   userNameError = false;

  constructor(private router: Router, private newSignedService: UserService) { }

  ngOnInit(){
    this.signinForm = new FormGroup({
      'userloginname': new FormControl(null, Validators.required),
      'loginpassword': new FormControl(null, [Validators.required,Validators.minLength(6)])
    });   
  }

  onSubmit(){
      this.loginUserName = this.signinForm.value.userloginname;
      this.password = this.signinForm.value.loginpassword;

      var id = this.newSignedService.getItem(this.loginUserName);
      if(id == false){
        this.userNameError = true;
        this.isLoginError = false;
      }
      else if(this.password != id.password){
        this.isLoginError = true;
        this.userNameError = false;
      }
      else if(this.password == id.password){
        this.correctSubmit();
      }     
   }

   correctSubmit(){
    this.router.navigate(['/home']);
   }

}
   
