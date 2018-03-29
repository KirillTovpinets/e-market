import { Size } from './size.class';
import { Image } from 'angular-modal-gallery';
export class Bike{
	private _title : string;
	private _lifeVPrice : number;
	private _powerVPrice : number;
	private _displayLVPrice : number;
	private _displayPVPrice : number;
	private _size : Size;
	private _breakSystem : number;
	private _maxSpeed : number;
	private _maxWayLength : number;
	private _weight : number;
	private _motor : any;
	private _batteryV : number;
	private _batteryA : number;
	private _batteryCharging : number;
	private _maxLoad : number;
	private _file : any;
	private _image : Blob;
	private _previews : Blob[];
	private _id : number;
	private _update : boolean;
	private _minPrev : Image[];

	public get minPrev() : Image[] {
		return this._minPrev;
	}
	public set minPrev(v : Image[]) {
		this._minPrev = v;
	}

	public get update() : boolean {
		return this._update;
	}
	public set update(v : boolean) {
		this._update = v;
	}
	public get previews() : Blob[] {
		return this._previews;
	}
	public set previews(v : Blob[]) {
		this._previews = v;
	}

	public get displayPVPrice() : number {
		return this._displayPVPrice;
	}
	public set displayPVPrice(v : number) {
		this._displayPVPrice = v;
	}
	public get displayLVPrice() : number {
		return this._displayLVPrice;
	}
	public set displayLVPrice(v : number) {
		this._displayLVPrice = v;
	}
	public get id() : number {
		return this._id;
	}
	public set id(v : number) {
		this._id = v;
	}
	
	public get image() : Blob {
		return this._image;
	}
	public set image(v : Blob) {
		this._image = v;
	}

	public get file() : any {
		return this._file;
	}
	public set file(v : any) {
		this._file = v;
	}

	public get batteryA() : number {
		return this._batteryA;
	}
	public set batteryA(v : number) {
		this._batteryA = v;
	}
	public get maxLoad() : number {
		return this._maxLoad;
	}
	public set maxLoad(v : number) {
		this._maxLoad = v;
	}
	public get batteryCharging() : number {
		return this._batteryCharging;
	}
	public set batteryCharging(v : number) {
		this._batteryCharging = v;
	}
	public get batteryV() : number {
		return this._batteryV;
	}
	public set batteryV(v : number) {
		this._batteryV = v;
	}
	public get motor() : any {
		return this._motor;
	}
	public set motor(v : any) {
		this._motor = v;
	}
	public get weight() : number {
		return this._weight;
	}
	public set weight(v : number) {
		this._weight = v;
	}
	public get maxWayLength() : number {
		return this._maxWayLength;
	}
	public set maxWayLength(v : number) {
		this._maxWayLength = v;
	}
	public get maxSpeed() : number {
		return this._maxSpeed;
	}
	public set maxSpeed(v : number) {
		this._maxSpeed = v;
	}
	public get breakSystem() : any {
		return this._breakSystem;
	}
	public set breakSystem(v : any) {
		this._breakSystem = v;
	}
	public get size() : Size {
		return this._size;
	}
	public set size(v : Size) {
		this._size = v;
	}
	public get powerVPrice() : number {
		return this._powerVPrice;
	}
	public set powerVPrice(v : number) {
		this._powerVPrice = v;
	}
	public get lifeVPrice() : number {
		return this._lifeVPrice;
	}
	public set lifeVPrice(v : number) {
		this._lifeVPrice = v;
	}
	public get title() : string {
		return this._title;
	}
	public set title(v : string) {
		this._title = v;
	}
	constructor(){
		this._size = new Size(1, 1, 1, 1, 1, 1);
		this._minPrev = [];
		// this._title = "Maku";
		this._lifeVPrice = 0;
		this._powerVPrice = 0;
		// this._breakSystem = 1;
		// this._maxSpeed = 1;
		// this._maxWayLength = 1;
		// this._weight = 1;
		// this._motor = 1;
		// this._batteryV = 1;
		// this._batteryA = 1;
		// this._batteryCharging = 1;
		// this._maxLoad = 1;
	}
}