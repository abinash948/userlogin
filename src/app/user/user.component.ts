import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  animations:[
    trigger('divstate',[
      state('in',style({
        opacity: 1,
        zIndex: 4 
      })), 
      state('out',style({
        opacity: 0,
        zIndex: 1
      })),
      transition('in <=> out',animate(1000))
    ]),
    trigger('anotherstate',[
      state('in',style({
        opacity: 0,
        zIndex: 1
      })),
      state('out',style({
        opacity: 1,
        zIndex: 4
      })),
      transition('in <=> out',animate(1000))
    ])
  ]
})
export class UserComponent implements OnInit {
  
  state = 'in';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  toggle(){
    this.state = 'out';
    this.router.navigate(['/signup']);
  }
  toggle2(){
    this.state = 'in';
    this.router.navigate(['/login']);
  }

}
