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

  markerinfo: boolean = false;
  large: boolean = true;
  message: string;
  
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

      var bounds = new google.maps.LatLngBounds();

      this.markers.forEach((props) => {

        const marker = new google.maps.Marker({
          position: props.position,
          map:  props.map,
          title: props.title
          
        });

        bounds.extend(marker.getPosition()); 
        this.map.fitBounds(bounds);

        const infoWindow = new google.maps.InfoWindow({
          content: marker.getTitle()
        });

      var mcontent: any = 
      '<div id="container">' +
      '<div class="title">Porcelain Factory of Vista Alegre</div>' +
      '<div class="content">' +
      '<div class="subTitle">History</div>' +
      '<p>Founded in 1824, the Porcelain Factory of Vista Alegre was the first industrial unit dedicated to porcelain production in Portugal. For the foundation and success of this risky industrial development was crucial the spirit of persistence of its founder, José Ferreira Pinto Basto. Leading figure in Portuguese society of the nineteenth century farm owner, daring dealer, wisely incorporated the liberal ideas of the century, having become "the first example of free enterprise" in Portugal.</p>' +
      '<br>Phone. +351 234 320 600<br>e-mail: geral@vaa.pt<br>www: www.myvistaalegre.com</p>'+
      '</div>' +
      '</div>';

          marker.addListener("click", () => {

          google.maps.event.trigger(this.map,'resize');

          this.map.setCenter(marker.getPosition());
          setTimeout(()=>{infoWindow.close()},3000);

          infoWindow.open(marker.getMap(), marker);

          // var mrkrcontent = infoWindow.getContent().toString();
          this.message = mcontent;

          this.markerinfo = true;
          this.large = false;

        });

        marker.setMap(this.map);

      });

  }
  
  onCancel(){
    this.markerinfo = false;
    this.large = true;
  }
}
 
