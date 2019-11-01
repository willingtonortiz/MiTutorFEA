import { Component, OnInit, OnDestroy } from "@angular/core";
import { TutoringOfferInfo } from "src/app/shared/dtos/Input";
import { Subscription } from "rxjs";
import { SearchTutoringOffersAnsTutorsService } from "../../services";

@Component({
	selector: "app-tutoring-offer-info-group",
	templateUrl: "./tutoring-offer-info-group.component.html",
	styleUrls: ["./tutoring-offer-info-group.component.scss"]
})
export class TutoringOfferInfoGroupComponent implements OnInit, OnDestroy {
	// @Input("tutoringOffers") tutoringOffers: Array<TutoringOfferInfo> = [];

	public tutoringOffers: Array<TutoringOfferInfo>;
	private _suscriptions: Array<Subscription>;

	constructor(
		private searchTutoringOffersAnsTutorsService: SearchTutoringOffersAnsTutorsService
	) {
		this._suscriptions = new Array<Subscription>();

		this._suscriptions.push(
			this.searchTutoringOffersAnsTutorsService.tutoringOffersObservable.subscribe(
				{
					next: (tutoringOffers: Array<TutoringOfferInfo>) => {
						this.tutoringOffers = tutoringOffers;
					},
					error: error => {
						console.log(error);
					}
				}
			)
		);
	}

	ngOnInit() {}

	public ngOnDestroy() {
		this._suscriptions.forEach(x => x.unsubscribe());
	}
}
