import { Component, OnInit, Input } from "@angular/core";
import { TutoringOfferInfo } from "src/app/shared/dtos/Input";
import { Router } from '@angular/router';

@Component({
	selector: "app-tutoring-offer-info",
	templateUrl: "./tutoring-offer-info.component.html",
	styleUrls: ["./tutoring-offer-info.component.scss"]
})
export class TutoringOfferInfoComponent implements OnInit {
	@Input("tutoringOffer") tutoringOffer: TutoringOfferInfo;

	constructor(
		private router:Router
	) {}

	ngOnInit() {}

	NavigateToDetails(e){

		this.router.navigate(['view-tutoring/'+e]);
	}
}
