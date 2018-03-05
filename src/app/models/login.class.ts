export class Login{
	private _login: string;
	private _password: string;

	public set login(v : string) {
		this._login = v;
	}
	public set password(v : string) {
		this._password = v;
	}

	public get login() : string {
		return this._login;
	}

	public get password() : string {
		return this._password;
	}
}