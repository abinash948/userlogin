import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2} from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  host: {'(document:click)': 'onClick($event)'}
})
export class HomeComponent implements OnInit, AfterViewInit{
  
  show: boolean = false;

  constructor(private router: Router,private _eref: ElementRef, private renderer: Renderer2) { }

  @ViewChild('sidebar') sidebar: ElementRef;
  ngOnInit(): void {

  }

  ngAfterViewInit(){
    if(this.show == true ){
      this.onClick(event);
    }  
    // this.body.nativeElement.addListener('click',()=>{
      //   this.show=false;
      // });
  }

  loginpage(){
    this.router.navigate(['/login']);
  }

  onToggle(){
    if(this.show == false){
        this.show = true;
    }
    else{
        this.show = false;
    }
   }
  
    
    onClick(event: { target: any; }) {
      if (this._eref.nativeElement.contains(event.target)){
          // this.show= false;
          this.renderer.setStyle(this.sidebar.nativeElement,'translate','-160px');
        
      }
  }
     
}

  
      


    
     
  

