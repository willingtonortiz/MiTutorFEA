import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { map } from "rxjs/operators";
import { UserRegister } from "src/app/shared/dtos/Input/UserRegister";
import { UserCredentials } from "src/app/shared/dtos/UserCredential";

@Injectable({
	providedIn: "root"
})
export class AuthenticationService {
	private currentUserSubject: BehaviorSubject<UserCredentials>;
	private currentUserObservable: Observable<UserCredentials>;

	constructor(private httpClient: HttpClient) {
		this.currentUserSubject = new BehaviorSubject<UserCredentials>(
			JSON.parse(localStorage.getItem("currentUser"))
		);

		this.currentUserObservable = this.currentUserSubject.asObservable();
	}

	public get userValue(): UserCredentials {
		return this.currentUserSubject.value;
	}

	public get userObservable(): Observable<UserCredentials> {
		return this.currentUserObservable;
	}

	public login(username: string, password: string): Promise<UserCredentials> {
		return this.httpClient
			.post<UserCredentials>(`${environment.apiUrl}/authentication`, {
				username,
				password
			})
			.pipe(
				map((user: UserCredentials) => {
					if (user && user.token) {
						localStorage.setItem(
							"currentUser",
							JSON.stringify(user)
						);
						this.currentUserSubject.next(user);
					}

					return user;
				})
			)
			.toPromise<UserCredentials>();
	}

	public logout() {
		localStorage.removeItem("currentUser");
		this.currentUserSubject.next(null);
	}

	public register(user: UserRegister) {
		const uri = `${environment.apiUrl}/register`;

		// CORREGIR!!!

		return this.httpClient.post(uri, user).toPromise<any>();
	}
}
