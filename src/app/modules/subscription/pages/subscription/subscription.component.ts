import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MembershipDTO } from 'src/app/shared/dtos/Input/MembershipDTO';
import { MembershipServiceService } from '../../services/membership-service.service';
import {Router} from '@angular/router';

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
		private router:Router,
		private _membershipService: MembershipServiceService
	) {}

	ngOnInit() {

	}


	public async Subscription():Promise<any>{

		let idUser =  JSON.parse(localStorage.getItem("currentUser")).id
		let newMembership:MembershipDTO = {
			userId:idUser,
			creditCard:this.creditCard,
			ccv:this.ccv,
			expirationDate:this.expirationDate
		}

		await this._membershipService.createTutor(newMembership).then( ()=>{
			this.router.navigateByUrl('/home');
		}

		);

	}
}
