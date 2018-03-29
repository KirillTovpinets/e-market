import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Bike } from '../../../models/bike.class';

@Injectable()
export class AddService {

  constructor(private http: Http) { }

  getData(table:string): Observable<any>{
  	return this.http.get("assets/php/getContent.php?table=" + table);
  }

  saveBike(bike: any): Observable<any>{
  	return this.http.post("assets/php/saveNew.php", bike);
  }

  savePreviews(data: any): Observable<any>{
  	return this.http.post("assets/php/savePreviews.php", data);
  }
}
