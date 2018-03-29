import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Bike } from '../models/bike.class';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
@Injectable()
export class ChartService {

	constructor(private http: Http) { }


	bikes: Bike[] = [];
	allBikes: Bike[] = [];
	currency: any = {};
	lang: any = {
		label: "en"
	};

	currencies: any[] = [];

	_currencies : BehaviorSubject<Array<any>> = new BehaviorSubject<Array<any>>(this.currencies);
	_currency: BehaviorSubject<any> = new BehaviorSubject<any>(this.currency);
	_lang: BehaviorSubject<any> = new BehaviorSubject<any>(this.lang);
	_bikes : BehaviorSubject<Array<Bike>> = new BehaviorSubject<Array<Bike>>(this.bikes);
	_allBikes : BehaviorSubject<Array<Bike>> = new BehaviorSubject<Array<Bike>>(this.allBikes);

	public setBikes(bike:Bike){
		this.bikes.push(bike);
		this._bikes.next(this.bikes);
	}

	public removeBike(bike: Bike){
		var index = this.bikes.indexOf(bike);
		this.bikes.splice(index, 1);
		this._bikes.next(this.bikes);
	}
	public setAllBikes(bikes:Bike[]){
		this.allBikes = bikes;
		this._allBikes.next(bikes);
	}

	public setCurrency(cur: any){
		if (cur.Cur_ID === 0) {
			cur.Symbol = "Br ";
			for(let bike of this.allBikes){
				bike.displayLVPrice = Math.round(bike.lifeVPrice * this.currency.Cur_OfficialRate);
				bike.displayPVPrice = Math.round(bike.powerVPrice * this.currency.Cur_OfficialRate);
			}
		}else{
			cur.Symbol = "$ ";
			for(let bike of this.allBikes){
				bike.displayLVPrice = bike.lifeVPrice;
				bike.displayPVPrice = bike.powerVPrice;
			}
		}
		this._allBikes.next(this.allBikes);
		this.currency = cur;
		this._currency.next(cur);
	}

	public setLang(lang: any){
		this.lang.next(lang);
		location.reload(true);
	}

	public setCurrencies(curList: any){
		this.currencies = curList;
		this._currencies.next(this.currencies);
	}
}
