import { Component, HostListener } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls:[
				"../admin/assets/images/favicon.png",
				"../admin/assets/plugins/bootstrap/css/bootstrap.min.css",
				"../admin/assets/plugins/chartist-js/dist/chartist.min.css",
				"../admin/assets/plugins/chartist-plugin-tooltip-master/dist/chartist-plugin-tooltip.css",
				"../admin/assets/plugins/c3-master/c3.min.css",
				"../admin/lite/css/style.css",
				"../admin/lite/css/pages/dashboard.css",
				"../admin/lite/css/colors/default-dark.css"
			]
})
export class HomeComponent {
	  slides = [
	    {img: "http://placehold.it/350x150/000000"},
	    {img: "http://placehold.it/350x150/111111"},
	    {img: "http://placehold.it/350x150/333333"},
	    {img: "http://placehold.it/350x150/666666"}
	  ];
	  slideConfig = {"slidesToShow": 2, "slidesToScroll": 2, "autoplay": true};

	  scrollToDiv(element:any){
	  	element.scrollIntoView();
	  }
}
