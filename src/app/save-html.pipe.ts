import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Pipe({
  name: 'saveHtml'
})
export class SaveHtmlPipe {
	constructor(private sanitizer: DomSanitizer){}

  transform(value): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }

}
