import { Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { Router } from '@angular/router';
import { MarkerinfoService } from './markerinfo.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit{
  markerinfo: boolean = false;
  large: boolean = true;
  message: string;
  show: boolean = false;

  constructor(private router: Router,
              private markerService: MarkerinfoService,
              private contentService: MarkerinfoService) { }

  @ViewChild('body') body: ElementRef;
  ngOnInit(): void {
      this.markerService.displayInfo.subscribe((data)=>{
        this.markerinfo= data;
        this.large= !data;
      });

      this.contentService.markerContent.subscribe((content)=>{
        this.message = content;
      });
  }

  ngAfterViewInit(){
      this.body.nativeElement.addListener('click',()=>{
        this.show=false;
      });
  }

  loginpage(){
    this.router.navigate(['/login']);
  }

  onCancel(){
    this.markerinfo = false;
    this.large = true;
  }

  onToggle(){
    this.show= true;
    }
  
}

  
      


    
     
  

