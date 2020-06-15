import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  signupForm: FormGroup;
  username: string;

  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, [Validators.required,Validators.minLength(6)]),
      'email': new FormControl(null,[Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)])
    });
  }
  onSignUp(){
    this.username =  this.signupForm.value.username;

    // const newsignup: User = {
    //   name: this.signupForm.value.name,
    //   username: this.signupForm.value.username,
    //   password: this.signupForm.value.password,
    //   email: this.signupForm.value.email
    // }

  //  this.userService.addItem(this.username, newsignup);

  //  this.signupForm.reset();
  //  this.isSignUpSuccess = true;
   //this.userService.newSignedUp.next(true);
   // this.router.navigate(['/login']);
 }

}
