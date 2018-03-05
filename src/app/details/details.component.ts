import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartService } from '../shared/chart.service';
import { Bike } from '../models/bike.class';
@Component({
	templateUrl: './details.component.html',
	styleUrls: ['../catalog/catalog.component.css', './details.component.css']

})
export class DetailsComponent implements OnInit {
	constructor(private router: ActivatedRoute,
				private chartSrv: ChartService) {}

	bikes: any[] = [];
	currentBike: any;

	scooterId: number = 0;
	ngOnInit() {
		this.chartSrv._bikes.subscribe(bikes => {
	      this.bikes = bikes;
	    });
	    this.router.paramMap.subscribe( params => {
	    	this.scooterId = this.router.snapshot.params["id"];
			this.bikes = JSON.parse(localStorage.getItem("bikes"));
			for (var i = 0; i < this.bikes.length; ++i) {
				if (this.bikes[i].id == this.scooterId) {
					this.currentBike = this.bikes[i];
					break;
				}
			}
	    })
	}
	AddToChart(bike:Bike){
		this.chartSrv.setBikes(bike);
	}
}
