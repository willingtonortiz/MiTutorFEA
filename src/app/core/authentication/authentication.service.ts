import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { map } from "rxjs/operators";
import { User } from "src/app/shared/models";
import { UserRegister } from 'src/app/shared/dtos/Input/UserRegister';

@Injectable({
	providedIn: "root"
})
export class AuthenticationService {
	private currentUserSubject: BehaviorSubject<User>;
	private currentUserObservable: Observable<User>;

	constructor(private httpClient: HttpClient) {
		this.currentUserSubject = new BehaviorSubject<User>(
			JSON.parse(localStorage.getItem("currentUser"))
		);

		this.currentUserObservable = this.currentUserSubject.asObservable();
	}

	public get userValue(): User {
		return this.currentUserSubject.value;
	}

	public get userObservable(): Observable<User> {
		return this.currentUserObservable;
	}

	public login(username: string, password: string): Observable<User> {
		return this.httpClient
			.post<any>(`${environment.apiUrl}/RUTA_LOGIN`, {
				username,
				password
			})
			.pipe(
				map((user: any) => {
					if (user && user.token) {
						localStorage.setItem(
							"currentUser",
							JSON.stringify(user)
						);
						this.currentUserSubject.next(user);
					}

					return user;
				})
			);
	}

	public logout() {
		localStorage.removeItem("currentUser");
		this.currentUserSubject.next(null);

	}

	public register(user: UserRegister) {
		const uri =`${environment.apiUrl}/register`	;
		const httpOptions = {
			headers: new HttpHeaders({
				"Content-Type": "application/json"
			})
		};

		return this.httpClient.post(uri, user, httpOptions).toPromise<any>();
	}
}
