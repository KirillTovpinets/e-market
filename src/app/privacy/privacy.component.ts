import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy',
  templateUrl: '../contacts/contacts.component.html',
  styleUrls: ['../catalog/catalog.component.css']
})
export class PrivacyComponent implements OnInit {

  constructor() { }
	pagename: string = "Privacy policy";
	content: string = `
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa nisi qui ducimus laborum ipsum eos perspiciatis tempora eaque ex odit rem, provident dolore minus tenetur, possimus unde debitis, sapiente quibusdam.
	`;
  ngOnInit() {
  }

}
