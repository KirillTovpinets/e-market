import { Component, OnInit } from '@angular/core';
import { ChartService } from '../shared/chart.service';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['../catalog/catalog.component.css', './chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor(private cart: ChartService) { }

  bikes:any[] = [];
  ngOnInit() {
  	this.cart._bikes.subscribe(bikes => {
  		this.bikes = bikes;
  		console.log(bikes);
  	})
  }

}
