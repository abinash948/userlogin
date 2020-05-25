import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

   newSignedUp = new Subject<boolean>();
  
  constructor() { }

  addItem(key: string , value: User){
    var Value = JSON.stringify(value);
    localStorage.setItem(key,Value);
  }

  getItem(key: string){
    for(var i=0;i<localStorage.length;i++){
      if(key == localStorage.key(i)){
        var item = localStorage.getItem(key);
      }
    }
      if(item == undefined){
        return false;
      } else {
        var password = JSON.parse(item);
        return password;
      }
  }

  // validator(){
  //   var archive: string[];
  //       for (var i = 0; i<localStorage.length; i++) {
  //           archive[i] = localStorage.key(i);
  //       }
  //   return archive;
  // }

}
