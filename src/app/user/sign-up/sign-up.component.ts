import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
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
    //this.userService.newSignedUp.next(true);
    this.router.navigate(['/login']);
  }

  
}

// function usernameValidator(control: AbstractControl):{[key: string]: boolean} | null {
//     const username = control.value;
//     console.log(localStorage.key(i));
//     var archive: string[];
  
//     for (var i = 0; i<localStorage.length; i++) {
//       console.log(localStorage.key(i));
//       console.log(archive[i]);
//         archive[i] = localStorage.key(i);
//         console.log(archive[i]);
//         console.log(localStorage.key(i));
//     }
//     for(var i=0;i<archive.length;i++){
//       if(username ==  archive[i]){
//         //console.log(username);
//         //console.log(existingUsers[i]);
//         return {'usernameError': true}
//       }
//       else{
//         return null;
//       }
//     }
//   }
  

  


