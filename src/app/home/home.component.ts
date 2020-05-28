import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarkerinfoService } from './markerinfo.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  markerinfo: boolean = false;
  large: boolean = true;
  message: string;

  constructor(private router: Router,
              private markerService: MarkerinfoService,
              private contentService: MarkerinfoService) { }

  ngOnInit(): void {
      this.markerService.displayInfo.subscribe((data)=>{
        this.markerinfo= data;
        this.large= !data;
      });

      this.contentService.markerContent.subscribe((content)=>{
        this.message = content;
      });
  }
  loginpage(){
    this.router.navigate(['/login']);
  }

  onCancel(){
    this.markerinfo = false;
    this.large = true;
  }

  
}

  
      


    
     
  

