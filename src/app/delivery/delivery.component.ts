import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery',
  templateUrl: '../contacts/contacts.component.html',
  styleUrls: ['../catalog/catalog.component.css']
})
export class DeliveryComponent implements OnInit {

  constructor() { }
	pagename: string = "Delivery policy";
	content: string = `
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa nisi qui ducimus laborum ipsum eos perspiciatis tempora eaque ex odit rem, provident dolore minus tenetur, possimus unde debitis, sapiente quibusdam.
	`;
  ngOnInit() {
  }

}
