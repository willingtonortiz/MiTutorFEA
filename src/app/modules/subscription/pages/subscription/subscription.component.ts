import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MembershipDTO } from 'src/app/shared/dtos/Input/MembershipDTO';
import { MembershipServiceService } from '../../services/membership-service.service';
@Component({
	selector: "app-subscription",
	templateUrl: "./subscription.component.html",
	styleUrls: ["./subscription.component.scss"]
})
export class SubscriptionComponent implements OnInit {
	public creditCard: string = "";
	public ccv: string = "";
	public expirationDate:string = "";
	constructor(
		private _membershipService: MembershipServiceService
	) {}

	ngOnInit() {}


	public async Subscription():Promise<any>{

		let newMembership:MembershipDTO = {
			userId:5,
			creditCard:this.creditCard,
			ccv:this.ccv,
			expirationDate:this.expirationDate
		}

		await this._membershipService.createTutor(newMembership);

	}
}
