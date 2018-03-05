import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
@Injectable()
export class SearchService {
	
	constructor(private http: Http) {}

	search(value): Observable<any>{
		return this.http.get('assets/php/getContent.php?value=' + value);
	}
}