import { Component, OnInit } from '@angular/core';
import { ChartService } from '../shared/chart.service';

@Component({
	selector: 'menu-top',
	templateUrl: "./menu.component.html",
	styleUrls: [`./menu.component.css`]
})
export class MenuComponent implements OnInit {
	constructor(private chart: ChartService) {}

	totalCost:number = 0;
	ngOnInit() {
		const bikeSub = this.chart._bikes.subscribe((bike:any) =>{
			console.log(typeof(bike.lifeVPrice));
			console.log(typeof(this.totalCost));
			this.totalCost = this.totalCost + (Number).parseInt(bike.lifeVPrice);
		})
	}
}