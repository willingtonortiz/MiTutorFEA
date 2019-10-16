import { Injectable } from "@angular/core";
import {
	CanActivate,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	UrlTree,
	Router
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthenticationService } from "../../authentication";
import { User } from "src/app/shared/models";

@Injectable({
	providedIn: "root"
})
export class AuthGuard implements CanActivate {
	public constructor(
		private router: Router,
		private authenticationService: AuthenticationService
	) {}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	):
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree>
		| boolean
		| UrlTree {
		const currentUser: User = this.authenticationService.userValue;

		if (currentUser) {
			if (
				next.data.roles &&
				next.data.roles.indexOf(currentUser.role) === -1
			) {
				this.router.navigate["/login"];
				return false;
			}

			return true;
		}

		this.router.navigate(["/login"]);
		return false;
	}
}
