import { Component, OnInit } from '@angular/core';

@Component({
	templateUrl: './admin.component.html',
	styleUrls:[
				"../../assets/images/favicon.png",
				"../../assets/plugins/bootstrap/css/bootstrap.min.css",
				"../../assets/plugins/chartist-js/dist/chartist.min.css",
				"../../assets/plugins/chartist-plugin-tooltip-master/dist/chartist-plugin-tooltip.css",
				"../../assets/plugins/c3-master/c3.min.css",
				"../css/style.css",
				"../css/pages/dashboard.css",
				"../css/colors/default-dark.css"
			]
})
export class AdminComponent implements OnInit {
	constructor() {}

	ngOnInit() {
		console.log("Im admin");
	}
}