import { Injectable } from "@angular/core";
import { MembershipDTO } from "src/app/shared/dtos/Input/MembershipDTO";
import { SuscriptionService } from "src/app/core";

@Injectable({
	providedIn: "root"
})
export class MembershipServiceService {
	constructor(private _membershipService: SuscriptionService) {}

	public async createTutor(membershipDTO: MembershipDTO): Promise<any> {
		await this._membershipService.createMembership(membershipDTO);
	}
}
