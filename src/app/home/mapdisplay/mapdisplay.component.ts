import { Component, OnInit } from '@angular/core';
import {} from 'googlemaps';
import { ViewChild } from '@angular/core';
import { AfterViewInit,ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mapdisplay',
  templateUrl: './mapdisplay.component.html',
  styleUrls: ['./mapdisplay.component.css']
})
export class MapdisplayComponent implements OnInit, AfterViewInit {
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

  mapOptions: google.maps.MapOptions = {
    center: {lat:40.67809,lng:53.833938},
    zoom: 8
   };
  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
      this.mapInitializer();
    }

  mapInitializer() {
      this.map = new google.maps.Map(this.gmap.nativeElement,this.mapOptions);
      this.markers.forEach((props) => {
        const marker = new google.maps.Marker({
          position: props.position,
          map:  props.map,
          title: props.title
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
