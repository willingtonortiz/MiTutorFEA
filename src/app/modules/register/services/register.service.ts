import { Injectable } from "@angular/core";
import { AuthenticationService } from "src/app/core";
import { UserRegister } from 'src/app/shared/dtos/Input/UserRegister';

@Injectable({
	providedIn: "root"
})
export class RegisterService {
	constructor(private _authenticationService: AuthenticationService) {}


	public async  Create(userRegister:UserRegister){
		await this._authenticationService.register(userRegister);

	}
}
