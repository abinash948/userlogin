import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {} from 'googlemaps';
import { ViewChild } from '@angular/core';
import { AfterViewInit,ElementRef } from 
  '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit {

    @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
    map: google.maps.Map;
   
    markers = [
      {
        position: new google.maps.LatLng(40.73061, 73.935242),
        map: this.map,
        title: "Marker 1"
      },
      {
        position: new google.maps.LatLng(32.06485, 34.763226),
        map: this.map,
        title: "Marker 2"
      },
      {
        position: new google.maps.LatLng(40.73061, -73.935242),
        map: this.map,
        title: "Hello World"
      },
    ];

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  loginpage(){
    this.router.navigate(['/login']);
  }

  ngAfterViewInit() {
      this.mapInitializer();
    }

  mapInitializer() {
      this.markers.forEach(() => {
        const marker = new google.maps.Marker({
        });
  
        const infoWindow = new google.maps.InfoWindow({
          content: marker.getTitle()
        });
  
        marker.addListener("click", () => {
          infoWindow.open(marker.getMap(), marker);
        });

        marker.setMap(this.map);
      });
  }
}

  
      


    
     
  

