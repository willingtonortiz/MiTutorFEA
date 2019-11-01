import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { MembershipDTO } from "src/app/shared/dtos/Input/MembershipDTO";
import { environment } from "src/environments/environment";

@Injectable({
	providedIn: "root"
})
export class SuscriptionService {
	constructor(private httpClient: HttpClient) {}

	public async createMembership(membershipDTO: MembershipDTO): Promise<any> {
		const httpOptions = {
			headers: new HttpHeaders({
				"Content-Type": "application/json"
			})
		};

		const url = `${environment.apiUrl}/users/subscription`;
		console.log(membershipDTO);


		return this.httpClient.post(url, membershipDTO, httpOptions).toPromise<any>();
	}
}
