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


		const url = `${environment.apiUrl}/users/subscription`;


		return this.httpClient.post<MembershipDTO>(url, membershipDTO).toPromise<MembershipDTO>();
	}
}
