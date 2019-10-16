import { Injectable } from "@angular/core";
import {
	HttpInterceptor,
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpErrorResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { AuthenticationService } from "../../authentication";

@Injectable({
	providedIn: "root"
})
export class ErrorInterceptor implements HttpInterceptor {
	constructor(private authenticationService: AuthenticationService) {}

	public intercept(
		request: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		return next.handle(request).pipe(
			catchError((error: HttpErrorResponse) => {
				if ([401, 403].indexOf(error.status) !== -1) {
					this.authenticationService.logout();
					location.reload(true);
				}

				const errorMessage = error.error.message || error.statusText;
				return throwError(errorMessage);
			})
		);
	}
}
