import { Component, OnInit } from '@angular/core';
import { AddService } from '../services/get-params.service';
import { HttpRequest } from '@angular/common/http';
import { Bike } from '../../../models/bike.class';
import { NotificationsService } from 'angular4-notify';
@Component({
	moduleId: module.id,
	templateUrl: './add.component.html',
	providers: [NotificationsService],
	styleUrls:[
				"../../assets/plugins/bootstrap/css/bootstrap.min.css",
				"../../assets/plugins/chartist-js/dist/chartist.min.css",
				"../../assets/plugins/chartist-plugin-tooltip-master/dist/chartist-plugin-tooltip.css",
				"../../assets/plugins/c3-master/c3.min.css",
				"../css/style.css",
				"../css/pages/dashboard.css",
				"../css/colors/default-dark.css",
				"./add.component.css"
			]
})
export class AddComponent implements OnInit {
	constructor(private addSrv: AddService,
				private notify: NotificationsService) {}

	breaks: any[];
	image:string;
	newBike: Bike = new Bike();
	url:string = "http://placehold.it/300x300";
	formData: FormData = new FormData();
	inputFile:File;
	previews: File[] = [];
	ngOnInit() {
		this.addSrv.getData("breakSystems").subscribe(response => {
			try{
				this.breaks = response.json();
			}catch(e){
				console.log(e);
				console.log(response._body);
			}
		}, error => console.log(error));
	}

	Save(newBike: Bike){
		let formData = new FormData();
		let file = this.inputFile;
	  	formData.append('selectFile', file, file.name);
	  	for (var i = 0; i < this.previews.length; ++i) {
	  		formData.append('preview-' + i, this.previews[i], this.previews[i].name)
	  	}
	  	formData.append('newBike', JSON.stringify(this.newBike));
		this.addSrv.saveBike(formData).subscribe(res => {
			this.notify.addInfo(res._body)
			this.newBike = new Bike();
		});
	}

	readUrl($event){
		this.inputFile = $event.srcElement.files[0];
		var input = $event.srcElement.files[0];
		var reader = new FileReader();
		reader.onload = loadEvent => {
			this.url = reader.result;
		}
		reader.readAsDataURL(input);
	}

	addPreview($event){
		console.log($event.file);
		this.previews.push($event.file)
	}
	popPreview($event){
		var index = this.previews.indexOf($event.file);
		this.previews.splice(index, 1);
	}
}