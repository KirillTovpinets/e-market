import { Component, OnInit } from '@angular/core';
import { GetListService } from '../shared/get-list.service';
import { ChartService } from '../shared/chart.service';
import { Image } from 'angular-modal-gallery';
import {TranslateService} from 'ng2-translate';
@Component({
	templateUrl: './catalog.component.html',
	styleUrls: [`./catalog.component.css`],
	providers: [GetListService]
})
export class CatalogComponent implements OnInit {
	constructor(private data: GetListService,
				private chart: ChartService,
				private translate: TranslateService) {}
	public bikes: any[];
	
	public batteries: any[];
	public breakSystem: any[];
	public filters: any = {};
	ngOnInit() {
		this.chart._allBikes.subscribe(bikes => {
			this.bikes = bikes;
		})
		this.data.getOptions("batteries").subscribe(response => {
			try{
				this.batteries = response.json();
			}catch(e){
				console.log(e);
				console.log(response._body);
			}

		})
		this.data.getOptions("breakSystems").subscribe(response => {
			try{
				this.breakSystem = response.json();

			}catch(e){
				console.log(e);
				console.log(response._body);
			}

		})
	}

	MaxPrice($event){
		this.filters.powerVPrice = $event.value;
		this.Update();
	}
	BreakSystemCheck($event){
		if (this.filters.breakSystem === undefined) {
			this.filters.breakSystem = [];
		}
		if (this.filters.breakSystem.indexOf($event.source.value) !== -1) {
			var indexToRem = this.filters.breakSystem.indexOf($event.source.value);
			this.filters.breakSystem.splice(indexToRem, 1);
		}else{
			this.filters.breakSystem.push($event.source.value);
		}
		this.Update();
	}
	BatteriesCheck($event){
		if (this.filters.batteryType === undefined) {
			this.filters.batteryType = [];
		}
		if (this.filters.batteryType.indexOf($event.source.value) !== -1) {
			var indexToRem = this.filters.batteryType.indexOf($event.source.value);
			this.filters.batteryType.splice(indexToRem, 1);
		}else{
			this.filters.batteryType.push($event.source.value);
		}
		this.Update();
	}
	MotorPowerChange($event){
		this.filters.motor = $event.value;
		this.Update();
	}
	BatteryPowerV($event){
		this.filters.batteryV = $event.target.value;
		this.Update();
	}
	BatteryPowerA($event){
		this.filters.batteryA = $event.target.value;
		this.Update();
	}
	Update(){
		this.data.getListWithFilter(this.filters).subscribe(response => {
			try{
				this.bikes = response.json();
				console.log(this.bikes);
				for (var i = 0; i < this.bikes.length; ++i) {
					this.bikes[i].displayLVPrice = this.bikes[i].lifeVPrice
					this.bikes[i].displayPVPrice = this.bikes[i].powerVPrice
					var previews = [];
					for(let prev of this.bikes[i].previews){
						var index = this.bikes[i].previews.indexOf(prev);
						var img = new Image(index, {
							 img: "data:image/jpg;base64," + prev 
						})
						previews.push(img);
					}
					this.bikes[i].minPrev = previews;
				}
				this.bikes = this.bikes.splice(1);
				console.log(this.bikes);
			}catch(e){
				console.log(e);
				console.log(response._body);
			}
		})
	}
}