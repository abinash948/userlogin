import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarkerinfoService {

  displayInfo = new Subject<boolean>();
  markerContent = new Subject<any>();
  
  constructor() { }
}
