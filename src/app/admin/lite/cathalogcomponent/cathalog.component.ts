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
	public change: boolean = false;
	public newPrevs: File[] = [];
	public buttonAction: string = "Редактировать";
	ngOnInit() {
		this.dataSrv.getData("catalog").subscribe(data => {
			try{
				this.bikes = data.json();
				console.log(this.bikes);
				for (var key in this.bikes[0]) {
					this.fields.push(key);
				}
				this.dataSrv.getData("previews").subscribe(res => {
					try{
						var prevs = res.json();
						for(let bike of this.bikes){
							bike.previews = [];
							for(let prev of prevs){
								if (bike.id === prev.bike_id) {
									bike.previews.push(prev.image);
								}
							}
						}
					}catch(e){
						console.log(e);
						console.log(res._body);
					}
				})
			}catch(e){
				console.log(e);
				console.log(data._body);
			}
			
		}, error => console.log(error));
	}

	toggleEdit(){
		this.change = !this.change;
		if (this.change) {
			this.buttonAction = "Отмена";
		}else{
			this.buttonAction = "Редактировать";
		}
	}
	addPreview($event, bike){
		this.newPrevs.push($event.file);
		bike.update = true;
	}
	revPreview($event, bike){
		var index = this.newPrevs.indexOf($event.file);	
		this.newPrevs.splice(index, 1);
	}
	Update(bike){
		let formData = new FormData();
		for (var i = 0; i < this.newPrevs.length; ++i) {
	  		formData.append('preview-' + i, this.newPrevs[i], this.newPrevs[i].name)
	  	}
	  	console.log(bike);
	  	formData.append("bike_id", bike.id);
	  	this.dataSrv.savePreviews(formData).subscribe(res => {
	  		bike.updata = false;
		});
	}
}