import { Directive, ElementRef, HostListener, Renderer } from "@angular/core";

@Directive({
	selector: '[changeColorOnScroll]'
})

export class ChangeColorDirective{
	constructor(private element: ElementRef,
				private renderer: Renderer){
		element.nativeElement.style.color = "red";
	}

	@HostListener('window:scroll', ['$event']) action($event:any){
		if (this.offset(this.element.nativeElement).top > 0) {
			this.element.nativeElement.style.background = "#000";	  				
		}else{
			this.element.nativeElement.style.background = "transparent";
		}

	  	
	}
	offset(elm:any): any {
	  try {return elm.offset();} catch(e) {}
	  var rawDom = elm;
	  var _x = 0;
	  var _y = 0;
	  var body = document.documentElement || document.body;
	  var scrollX = window.pageXOffset || body.scrollLeft;
	  var scrollY = window.pageYOffset || body.scrollTop;
	  _x = rawDom.getBoundingClientRect().left + scrollX;
	  _y = rawDom.getBoundingClientRect().top + scrollY;
	  return { left: _x, top: _y };
	}
}