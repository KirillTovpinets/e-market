import { Component, OnInit } from '@angular/core';
import { ChartService } from '../shared/chart.service';
import { SearchService } from './search.service';
import { TranslateService } from 'ng2-translate';
import { Http } from '@angular/http';
@Component({
	selector: 'menu-top',
	templateUrl: "./menu.component.html",
	styleUrls: [`./menu.component.css`],
	providers: [SearchService]
})
export class MenuComponent implements OnInit {
	constructor(private chart: ChartService,
				private srch: SearchService,
				private http: Http,
				private translate: TranslateService) {}

	totalCost:number = 0;
	searchValue: string = "";
	searchResult: any[] = [];
	searchResultMsg: string = "";
	currentCurrency: any = {};
	currencyList: any[] = [];

	currentLang: any = {};
	langList: any[] = [
		{ label: "ru" }
	];

	ngOnInit() {
		this.translate.setDefaultLang('en');
		const bikeSub = this.chart._bikes.subscribe((bikes:any[]) =>{
			this.totalCost = 0;
			for(let bike of bikes){
				this.totalCost += (Number).parseInt(bike.lifeVPrice);
			}
			if (bikes.length === 0) {
				this.totalCost = 0;
			}
			console.log(this.totalCost);
		})

		const currency = this.chart._currency.subscribe((cur: any) => {
			this.currentCurrency = cur;
		})

		const currencies = this.chart._currencies.subscribe((curs: any) => {
			this.currencyList = curs;
		})

		const lang = this.chart._lang.subscribe((lang: any) => {
			this.currentLang = lang;
		})
		this.http.get("http://www.nbrb.by/API/ExRates/Rates?Periodicity=0").subscribe(res => {
			var currencies = res.json();
			var currenciToPush = [];
			var currentCurrency = {};
			for(let cur of currencies){
				if (cur.Cur_ID === 145) {
					currentCurrency = cur;
				}
			}
			this.chart.setCurrency(currentCurrency);
			var curList = [
				{ Cur_Abbreviation: "BYN", Cur_ID: 0 }
			]
			this.chart.setCurrencies(curList);
		})
	}

	Search(value){
		if (value.length === 0) {
			this.searchResult = [];
			this.searchResultMsg = "";
		}
		this.srch.search(value).subscribe((res: any) => {
			if (res.json().length !== 0) {
				this.searchResult = res.json();
				this.searchResultMsg = "";
			}else{
				this.searchResult = []
				this.searchResultMsg = "Not found"
			}
		})
	}
	choose(){
		this.searchValue = "";
		this.searchResult = [];
	}
	ChangeCurrency(currency: any){
		this.currencyList.push(this.currentCurrency);
		var index = this.currencyList.indexOf(currency);
		this.currentCurrency = currency;
		this.currencyList.splice(index, 1);
		this.chart.setCurrency(this.currentCurrency);
		this.chart.setCurrencies(this.currencyList);
	}
	ChangeLang(lang:any){
		this.translate.use(lang.label);
		this.langList.push(this.currentLang);
		var index = this.langList.indexOf(lang);
		this.currentLang = lang;
		this.langList.splice(index, 1);	
	}
}