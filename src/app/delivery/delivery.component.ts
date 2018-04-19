import { Component, OnInit, ViewChild } from '@angular/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['../catalog/catalog.component.css']
})
export class DeliveryComponent implements OnInit {
  @ViewChild("map") mapElement: any;
  map: google.maps.Map;

  constructor() { }
  ngOnInit() {
    var mapProp = {
      center: new google.maps.LatLng(54.3095347, 26.8778923),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProp);
  }

}
