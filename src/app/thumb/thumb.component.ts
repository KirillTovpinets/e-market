import { Component, OnInit, Input } from '@angular/core';
import { Bike } from '../models/bike.class';
import { ChartService } from '../shared/chart.service';
@Component({
  selector: 'thumb',
  templateUrl: './thumb.component.html',
  styleUrls: ['./thumb.component.css']
})
export class ThumbComponent implements OnInit {
	@Input('bike') bike: Bike;
  constructor(private chartSrv: ChartService) { }

  ngOnInit() {
  	console.log(this.bike);
  }

  AddToChart(bike:Bike){
  	console.log("add");
  	this.chartSrv.setBikes(bike);
  }

}