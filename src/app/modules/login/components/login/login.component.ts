import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthenticationService } from "src/app/core";
import { Router } from "@angular/router";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
	public loginForm: FormGroup;
	public errorMessage: string = "";

	constructor(
		private _formBuilder: FormBuilder,
		private _authenticationService: AuthenticationService,
		private _router: Router
	) {
		this.loginForm = this._formBuilder.group({
			username: ["", Validators.required],
			password: ["", Validators.required]
		});
	}

	ngOnInit() {}

	public async login() {
		if (this.loginForm.invalid) {
			return;
		}

		const { username, password } = this.loginForm.value;

		try {
			const data = await this._authenticationService.login(
				username,
				password
			);
			this._router.navigate(["home"]);
		} catch (error) {
			this.errorMessage = "Usuario o contraseña incorrectos";
			// console.log(error);
		}
	}

	public get username() {
		return this.loginForm.get("username");
	}

	public get password() {
		return this.loginForm.get("password");
	}
}
