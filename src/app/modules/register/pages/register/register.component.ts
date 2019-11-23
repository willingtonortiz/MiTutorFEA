import { Component, OnInit } from "@angular/core";
import { UniversityService } from "src/app/core";
import { University } from "src/app/shared/models/University/University";
import { UserRegister } from "src/app/shared/dtos/Input/UserRegister";
import { RegisterService } from "../../services/register.service";
import { Router } from '@angular/router';

@Component({
	selector: "app-register",
	templateUrl: "./register.component.html",
	styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
	public email: string;
	public lastName: string;
	public name: string;
	public password: string;
	public semester: number;
	public universityId: number;
	public username: string;
	public universities: Array<University>;
	public career: string;
	constructor(
		private _universityService: UniversityService,
		private _registerService: RegisterService,
		private _route:Router
	) {}

	async ngOnInit() {
		await this._universityService.findAll().then(data => {
			this.universities = data;
		});
	}

	public registerUser() {
		const userRegister: UserRegister = {
			email: this.email,
			lastName: this.lastName,
			name: this.name,
			password: this.password,
			semester: this.semester,
			universityId: this.universityId,
			username: this.username,
			career: this.career
		};
		// this.email,
		// 	this.lastName,
		// 	this.name,
		// 	this.password,
		// 	this.semester,
		// 	this.universityId,
		// 	this.username,
		// 	(this.career = "");

		this._registerService.Create(userRegister).then ( ()=>{
			this._route.navigateByUrl('/login');
		});
	}
}
