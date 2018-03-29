import { Component, OnInit } from '@angular/core';
import { ChartService } from '../shared/chart.service';
import {
  AccessibilityConfig, Action, AdvancedLayout, ButtonEvent, ButtonsConfig, ButtonsStrategy, ButtonType, Description, DescriptionStrategy,
  DotsConfig, GridLayout, Image, ImageModalEvent, LineLayout, PlainGalleryConfig, PlainGalleryStrategy, PreviewConfig
} from 'angular-modal-gallery';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['../catalog/catalog.component.css', './chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor(private cart: ChartService) { }

  bikes:any[] = [];
  currency: any;
  plainGalleryRow: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.ROW,
    layout: new LineLayout({ width: '80px', height: '80px' }, { length: 4, wrap: true }, 'flex-start')
  };
  ngOnInit() {
  	this.cart._bikes.subscribe(bikes => {
  		this.bikes = bikes;
  	})
    this.cart._currency.subscribe(cur => {
      this.currency = cur;
    })
  }

  Remove(bike:any){
    this.cart.removeBike(bike);
  }

}
