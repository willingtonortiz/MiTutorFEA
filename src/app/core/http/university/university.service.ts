import { Injectable, ɵConsole } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { map } from "rxjs/operators";
import { University } from "src/app/shared/models/University/University";

@Injectable({
	providedIn: "root"
})
export class UniversityService {
	constructor(private httpClient: HttpClient) {}

	public findAll(): Promise<Array<University>> {
		const url = `${environment.apiUrl}/universities`;
		return this.httpClient
			.get<Array<University>>(url)
			.toPromise<Array<University>>();
	}

	public findByUserId(userId: number): Promise<University> {
		return this.httpClient
			.get<University>(`${environment.apiUrl}/users/${userId}/university`)
			.toPromise<University>();
	}
}
