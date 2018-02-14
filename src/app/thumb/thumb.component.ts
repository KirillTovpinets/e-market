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

  bikes: any[];
  ngOnInit() {
    this.chartSrv._bikes.subscribe(bikes => {
      this.bikes = bikes;
    });
  }

  AddToChart(bike:Bike){
  	this.chartSrv.setBikes(bike);
  }

}
