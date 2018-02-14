import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Bike } from '../models/bike.class';
@Injectable()
export class ChartService {

	constructor() { }
	bikes: Bike[] = [];
	_bikes : BehaviorSubject<Array<Bike>> = new BehaviorSubject<Array<Bike>>(this.bikes);

	public setBikes(bike:Bike){
		this.bikes.push(bike);
		this._bikes.next(this.bikes);
	}
}
