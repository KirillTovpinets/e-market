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

}
