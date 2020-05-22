import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],

})
export class SignInComponent implements OnInit {
   newUser = false;
   //private activatedSub : Subscription;
   signinForm: FormGroup;
   loginUserName: string;
   password: string;

  constructor(private router: Router, private newSignedService: UserService) { }

  ngOnInit(){
    this.signinForm = new FormGroup({
      'userloginname': new FormControl(null, Validators.required),
      'loginpassword': new FormControl(null, [Validators.required,Validators.minLength(6)])
    });

      this.newSignedService.newSignedUp.subscribe(data=>{
      this.newUser = data;
    });  

  }

  onSubmit(){
      this.loginUserName = this.signinForm.value.userloginname;

      var id = this.newSignedService.getItem(this.loginUserName);
      this.password = this.signinForm.value.loginpassword;
      
      if(this.password == id.password){
        this.correctSubmit();
      }
     
   }

   correctSubmit(){
    this.router.navigate(['/home']);
   }

}
   
