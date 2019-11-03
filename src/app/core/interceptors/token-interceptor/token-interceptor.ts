import { Injectable } from "@angular/core";
import {
	HttpInterceptor,
	HttpRequest,
	HttpHandler,
	HttpEvent
} from "@angular/common/http";

import { Observable } from "rxjs";
import { AuthenticationService } from "../../authentication";
import { User } from "src/app/shared/models";
import { UserCredentials } from "src/app/shared/dtos/UserCredential";

@Injectable({
	providedIn: "root"
})
export class TokenInterceptor implements HttpInterceptor {
	constructor(private authenticationService: AuthenticationService) {}

	public intercept(
		request: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		const currentUser: UserCredentials = this.authenticationService
			.userValue;

		const isLoggedIn: any = currentUser && currentUser.token;

		if (isLoggedIn) {
			request = request.clone({
				setHeaders: {
					Authorization: `Bearer ${currentUser.token}`
				}
			});
		}

		return next.handle(request);
	}
}
