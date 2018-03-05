import { Component, OnInit } from '@angular/core';
import { ChartService } from '../shared/chart.service';
import { SearchService } from './search.service';

@Component({
	selector: 'menu-top',
	templateUrl: "./menu.component.html",
	styleUrls: [`./menu.component.css`],
	providers: [SearchService]
})
export class MenuComponent implements OnInit {
	constructor(private chart: ChartService,
				private srch: SearchService) {}

	totalCost:number = 0;
	searchValue: string = "";
	searchResult: any[] = [];
	searchResultMsg: string = "";
	ngOnInit() {
		const bikeSub = this.chart._bikes.subscribe((bikes:any[]) =>{
			for(let bike of bikes){
				this.totalCost += (Number).parseInt(bike.lifeVPrice);
			}
		})
	}

	Search(value){
		if (value.length === 0) {
			this.searchResult = [];
			this.searchResultMsg = "";
		}
		this.srch.search(value).subscribe((res: any) => {
			if (res.json().length !== 0) {
				this.searchResult = res.json();
				this.searchResultMsg = "";
			}else{
				this.searchResult = []
				this.searchResultMsg = "Not found"
			}
		})
	}
	choose(){
		this.searchValue = "";
		this.searchResult = [];
	}
}