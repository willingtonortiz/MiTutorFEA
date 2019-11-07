import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MembershipDTO } from "src/app/shared/dtos/Input/MembershipDTO";
import { MembershipServiceService } from "../../services/membership-service.service";
import { AuthenticationService } from "src/app/core";
import { UserCredentials } from "src/app/shared/dtos/UserCredential";
import { Router } from "@angular/router";
@Component({
	selector: "app-subscription",
	templateUrl: "./subscription.component.html",
	styleUrls: ["./subscription.component.scss"]
})
export class SubscriptionComponent implements OnInit {
	public creditCard: string = "";
	public ccv: string = "";
	public expirationDate: string = "";
	public currentUser: UserCredentials;

	constructor(
		private _membershipService: MembershipServiceService,
		private _authenticationService: AuthenticationService,
		private _router: Router
	) {
		this.currentUser = this._authenticationService.userValue;
	}

	ngOnInit() {}

	public async Subscription(): Promise<any> {
		let newMembership: MembershipDTO = {
			userId: this.currentUser.id,
			creditCard: this.creditCard,
			ccv: this.ccv,
			expirationDate: this.expirationDate
		};

		try {
			await this._membershipService.createTutor(newMembership);
			this._authenticationService.changeToTutor();
			this._router.navigate(["/home"]);
		} catch (error) {}
	}
}
