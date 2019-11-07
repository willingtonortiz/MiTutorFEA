import { Injectable } from "@angular/core";
import { AuthenticationService } from "src/app/core";
import { UserRegister } from "src/app/shared/dtos/Input/UserRegister";
import { Router } from "@angular/router";

@Injectable({
	providedIn: "root"
})
export class RegisterService {
	constructor(
		private _authenticationService: AuthenticationService,
		private _router: Router
	) {}

	public async Create(userRegister: UserRegister) {
		try {
			await this._authenticationService.register(userRegister);
			this._router.navigate(["/login"]);
		} catch (error) {}
	}
}
