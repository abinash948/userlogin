import { Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit{
  
  show: boolean = false;

  constructor(private router: Router) { }

  // @ViewChild('body') body: ElementRef;
  ngOnInit(): void {
  }

  ngAfterViewInit(){
      // this.body.nativeElement.addListener('click',()=>{
      //   this.show=false;
      // });
  }

  loginpage(){
    this.router.navigate(['/login']);
  }

  onToggle(){
    this.show= true;
    }
  
}

  
      


    
     
  

