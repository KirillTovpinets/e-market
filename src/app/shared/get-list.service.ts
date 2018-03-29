import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
@Injectable()
export class GetListService {

  constructor(private http: Http) { 
  }

  getList(): Observable<any>{
  	return this.http.get("assets/php/getContent.php?table=catalog");
  }
  getOptions(table): Observable<any>{
  	return this.http.get("assets/php/getContent.php?table=" + table);
  }
  getListWithFilter(filters): Observable<any>{
  	console.log(filters);
  	return this.http.post("assets/php/getContent.php", filters);
  }
}
