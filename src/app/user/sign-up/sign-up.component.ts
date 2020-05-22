import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/shared/user.model';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']

})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup;
  username: string;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, [Validators.required,Validators.minLength(6)]),
      'email': new FormControl(null,[Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)])
    });
  }

  onSignUp(){
     this.username =  this.signupForm.value.username;

     const newsignup: User = {
       name: this.signupForm.value.name,
       username: this.signupForm.value.username,
       password: this.signupForm.value.password,
       email: this.signupForm.value.email
     }

    this.userService.addItem(this.username, newsignup);
    
    this.signupForm.reset();
    this.userService.newSignedUp.next(true);
    this.router.navigate(['/login']);
  }

}
