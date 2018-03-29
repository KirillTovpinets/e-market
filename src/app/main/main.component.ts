import { Component, HostListener, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GetListService } from '../shared/get-list.service';
import { Bike } from '../models/bike.class';
import { ChartService } from '../shared/chart.service';
import { Image } from 'angular-modal-gallery';
@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [GetListService]
})
export class MainComponent implements OnInit{
	constructor(private router: Router,
				private list: GetListService,
				private chart: ChartService){}
	bikes: Bike[];
	@ViewChild("callbackTpl") callback: TemplateRef<any>
	ngOnInit(){
		this.list.getList().subscribe(response => {
			try{
				this.bikes = response.json();
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
				this.chart.setAllBikes(this.bikes);
			}catch(e){
				console.log(e);
				// console.log(response._body);
			}
		})

		this.chart._allBikes.subscribe(bikes => {
			this.bikes = bikes;
		})
	}
}
