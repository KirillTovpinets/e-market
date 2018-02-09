import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Bike } from '../models/bike.class';
@Injectable()
export class ChartService {

	constructor() { }
	_bikes : BehaviorSubject<Bike> = new BehaviorSubject<Bike>(new Bike());

	public setBikes(bike:Bike){
		this._bikes.next(bike);
	}
}
