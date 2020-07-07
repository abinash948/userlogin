import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateUser } from'../../shared/createUser.model';
import { FormService } from '../form.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  createUserForm: FormGroup;
  userCreated: boolean = false;

  constructor(private  formService: FormService) { }

  ngOnInit(): void {
    this.createUserForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, [Validators.required,Validators.minLength(6)]),
      'email': new FormControl(null,[Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
      'gender': new FormControl(null,Validators.required)
    });
  }
  onCreateUser(){

    const newsignup: CreateUser = {
      name: this.createUserForm.value.name,
      username: this.createUserForm.value.username,
      password: this.createUserForm.value.password,
      email: this.createUserForm.value.email,
      gender: this.createUserForm.value.gender
    }
     
    this.userCreated = true;
    // this.formService.createNewUser.next(newsignup);
    sessionStorage.setItem("newsignup",JSON.stringify(newsignup));
    this.formService.addRow.next(true);
    this.createUserForm.reset();
  
   //this.userService.newSignedUp.next(true);
   // this.router.navigate(['/login']);
 }

 changeGender(e) {
  e.target.value;
}
}
