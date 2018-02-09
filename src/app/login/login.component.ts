import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login.class';
import { LoginService } from './login.service';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
@Component({
	templateUrl: './login.component.html',
	styleUrls: ["./login.component.css"],
	providers: [LoginService]
})
export class LoginComponent implements OnInit {
	constructor(private logIn: LoginService, private router: Router) {}

	ngOnInit() {
		
	}
	login: Login = new Login();
	message: string = "";
	Login(login:Login): void{
		// this.logIn.try(login).subscribe((res:Response) =>{
		// 	if (res.json().status === "success") {
		// 		this.router.navigate(['/bezoiladmin']);
		// 	}else if(res.json().status === "errorPass"){
		// 		this.message = "Неверный пароль";
		// 	}else if(res.json().status === "errorLogin"){
		// 		this.message = "Неверный логин";
		// 	}
		// });
		this.router.navigate(['/dashboard']);
	}
}