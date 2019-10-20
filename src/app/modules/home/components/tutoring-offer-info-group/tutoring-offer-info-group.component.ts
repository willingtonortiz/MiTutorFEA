import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { TutoringOfferInfo } from "src/app/shared/dtos";

@Component({
	selector: "app-tutoring-offer-info-group",
	templateUrl: "./tutoring-offer-info-group.component.html",
	styleUrls: ["./tutoring-offer-info-group.component.scss"]
})
export class TutoringOfferInfoGroupComponent implements OnInit, OnChanges {
	@Input("tutoringOffers") tutoringOffers: Array<TutoringOfferInfo> = [];

	constructor() {}

	ngOnInit() {
		this.tutoringOffers = [];
	}

	ngOnChanges() {
		// console.log(this.tutoringOffers);
	}
}
