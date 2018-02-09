import { Component, OnInit } from '@angular/core';
import { GetListService } from '../shared/get-list.service';
@Component({
	templateUrl: './catalog.component.html',
	styleUrls: [`./catalog.component.css`],
	providers: [GetListService]
})
export class CatalogComponent implements OnInit {
	constructor(private data: GetListService) {}
	bikes: any[];
	
	ngOnInit() {
		this.data.getList().subscribe(response => {
			try{
				this.bikes = response.json();
				this.bikes = this.bikes.splice(1);
				// console.log(response.json());
			}catch(e){
				console.log(e);
				console.log(response._body);
			}
		})
	}

	AddToChart(bike:any){
		
	}
}