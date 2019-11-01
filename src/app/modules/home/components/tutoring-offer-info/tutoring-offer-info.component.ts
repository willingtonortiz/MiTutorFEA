import { Component, OnInit, Input } from "@angular/core";
import { TutoringOfferInfo } from "src/app/shared/dtos/Input";

@Component({
	selector: "app-tutoring-offer-info",
	templateUrl: "./tutoring-offer-info.component.html",
	styleUrls: ["./tutoring-offer-info.component.scss"]
})
export class TutoringOfferInfoComponent implements OnInit {
	@Input("tutoringOffer") tutoringOffer: TutoringOfferInfo;

	constructor() {}

	ngOnInit() {}
}
