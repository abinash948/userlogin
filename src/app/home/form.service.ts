import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CreateUser } from '../shared/createUser.model';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  createNewUser = new Subject<Object>();
  addRow = new Subject<boolean>();

  constructor() { }

  
    
}
