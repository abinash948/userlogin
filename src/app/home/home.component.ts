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

  // @ViewChild('map') mapElement: any;
  // map: google.maps.Map;

  title = 'angular-gmap';
    @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
    map: google.maps.Map;
    lat = 40.73061;
    lng = -73.935242;

  constructor(private router: Router) { }

  ngOnInit(): void {
  //     const mapProperties = {
  //     center: new google.maps.LatLng(35.2271, -80.8431),
  //     zoom: 15,
  //     mapTypeId: google.maps.MapTypeId.ROADMAP
  //   };
  //     this.map = new google.maps.Map(this.mapElement.nativeElement,mapProperties);
 }

  loginpage(){
    this.router.navigate(['/login']);
  }

  coordinates = new google.maps.LatLng(this.lat, this.lng);

    mapOptions: google.maps.MapOptions = {
     center: this.coordinates,
     zoom: 8
    };

    marker = new google.maps.Marker({
      position: this.coordinates,
      map: this.map,
    });

    ngAfterViewInit() {
      this.mapInitializer();
    }

    mapInitializer() {
      this.map = new google.maps.Map(this.gmap.nativeElement, 
      this.mapOptions);
      this.marker.setMap(this.map);
    }
   }

