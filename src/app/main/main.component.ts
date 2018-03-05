import { Component, HostListener, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GetListService } from '../shared/get-list.service';
import { Bike } from '../models/bike.class';
@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [GetListService]
})
export class MainComponent implements OnInit{
	constructor(private router: Router,
				private list: GetListService){}
	bikes: any[];
	@ViewChild("callbackTpl") callback: TemplateRef<any>
	ngOnInit(){
		this.list.getList().subscribe(response => {
			try{
				this.bikes = response.json();
				this.bikes = this.bikes.splice(1);
				localStorage.setItem("bikes", JSON.stringify(this.bikes));
			}catch(e){
				console.log(e);
				console.log(response._body);
			}
		})
	}
	Callback(){
	}
}
