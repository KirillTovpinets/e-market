import { Component, OnInit } from '@angular/core';
import { AddService } from '../services/get-params.service';
@Component({
	templateUrl: './cathalog.component.html',
	styleUrls:[
				"../../assets/plugins/bootstrap/css/bootstrap.min.css",
				"../../assets/plugins/chartist-js/dist/chartist.min.css",
				"../../assets/plugins/chartist-plugin-tooltip-master/dist/chartist-plugin-tooltip.css",
				"../../assets/plugins/c3-master/c3.min.css",
				"../css/style.css",
				"../css/pages/dashboard.css",
				"../css/colors/default-dark.css",
				"./cathalog.component.css"
			]
})
export class CathalogComponent implements OnInit {
	constructor(private dataSrv: AddService) {}

	public bikes: any[] = [];
	private fields: string[] = [];
	ngOnInit() {
		this.dataSrv.getData("catalog").subscribe(data => {
			try{
				this.bikes = data.json();
				for (var key in this.bikes[0]) {
					this.fields.push(key);
				}
			}catch(e){
				console.log(e);
				console.log(data._body);
			}
			
		}, error => console.log(error));
	}
}