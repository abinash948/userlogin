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

  constructor(private router: Router, private newSignedService: UserService) { }

  ngOnInit(){
    this.signinForm = new FormGroup({
      'userloginname': new FormControl(null, Validators.required),
      'loginpassword': new FormControl(null, [Validators.required,Validators.minLength(6)])
    });

      this.newSignedService.newSignedUp.subscribe(data=>{
      console.log(data);
      this.newUser = data;
      console.log(this.newUser);
    });  

      console.log(this.newUser);
    
  }

  onSubmit(){
     this.router.navigate(['/home']);
   }

}
   
