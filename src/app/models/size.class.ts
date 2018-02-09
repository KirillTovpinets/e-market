export class Size{
	private _height : number;
	private _width : number;
	private _length : number;
	private _wheels : number;
	private _sitHeight : number;
	private _clearance : number;
	constructor(h:number, w:number, l:number, wh:number, s:number, c:number) {
		// this._height = h;
		// this._width = w;
		// this._length = l;
		// this._wheels = wh;
		// this._sitHeight = s;
		// this._clearance = c;
	}
	public get clearance() : number {
		return this._clearance;
	}
	public set clearance(v : number) {
		this._clearance = v;
	}
	public get sitHeight() : number {
		return this._sitHeight;
	}
	public set sitHeight(v : number) {
		this._sitHeight = v;
	}
	public get wheels() : number {
		return this._wheels;
	}
	public set wheels(v : number) {
		this._wheels = v;
	}
	public get length() : number {
		return this._length;
	}
	public set length(v : number) {
		this._length = v;
	}
	public get width() : number {
		return this._width;
	}
	public set width(v : number) {
		this._width = v;
	}
	public get height() : number {
		return this._height;
	}
	public set height(v : number) {
		this._height = v;
	}
}