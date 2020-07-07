import { Component, OnInit } from '@angular/core';
import { CreateUser } from 'src/app/shared/createUser.model';
import { FormService } from '../../form.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  dynamicArray = [];
  // showRow: boolean = false;

  constructor(private formService: FormService) { }

  ngOnInit(): void {
    
    // this.formService.createNewUser.subscribe((data) =>{
    //   console.log(data);
    //    this.dynamicArray.push(data);
      //  console.log(this.dynamicArray.name);

    // });
    // this.formService.addRow.subscribe((value)=>
    // {
    //   this.showRow = value;
    // });
    if(sessionStorage.getItem("newsignup")){
      let data = JSON.parse(sessionStorage.getItem("newsignup"));
      this.dynamicArray.push(data);
      console.log(this.dynamicArray);
      sessionStorage.removeItem("newsignup");
    }

    
    
  }
   delete(index){
    this.dynamicArray.splice(index, 1);
  }

}




  

  