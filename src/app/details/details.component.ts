import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartService } from '../shared/chart.service';
import { Bike } from '../models/bike.class';
import {
  AccessibilityConfig, Action, AdvancedLayout, ButtonEvent, ButtonsConfig, ButtonsStrategy, ButtonType, Description, DescriptionStrategy,
  DotsConfig, GridLayout, Image, ImageModalEvent, LineLayout, PlainGalleryConfig, PlainGalleryStrategy, PreviewConfig
} from 'angular-modal-gallery';
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
	minPrev: Image[] = [];

	plainGalleryRow: PlainGalleryConfig = {
		strategy: PlainGalleryStrategy.ROW,
		layout: new LineLayout({ width: '80px', height: '80px' }, { length: 4, wrap: true }, 'flex-start')
	};
	ngOnInit() {

		this.chartSrv._bikes.subscribe(bikes => {
	      this.bikes = bikes;
	    });
	    this.router.paramMap.subscribe( params => {
	    	this.scooterId = this.router.snapshot.params["id"];
	    	this.bikes = this.chartSrv.allBikes;
			for (var i = 0; i < this.bikes.length; ++i) {
				if (this.bikes[i].id == this.scooterId) {
					this.currentBike = this.bikes[i];
					break;
				}
			}

			// for (var i = 0; i < this.currentBike.previews.length; i++) {
			// 	var img = new Image(i, {
			// 		img: "data:image/jpg;base64," + this.currentBike.previews[i]
			// 	});
			// 	this.minPrev.push(img);
			// }
	    })
	}
	AddToChart(bike:Bike){
		this.chartSrv.setBikes(bike);
	}
}
