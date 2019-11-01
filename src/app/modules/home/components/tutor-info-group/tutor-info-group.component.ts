import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { TutorInfo } from "src/app/shared/dtos/Input";
import { SearchTutoringOffersAnsTutorsService } from "../../services";
import { Subscription } from "rxjs";

@Component({
	selector: "app-tutor-info-group",
	templateUrl: "./tutor-info-group.component.html",
	styleUrls: ["./tutor-info-group.component.scss"]
})
export class TutorInfoGroupComponent implements OnInit, OnDestroy {
	// @Input("tutors") tutors: Array<TutorInfo>;
	public tutors: Array<TutorInfo>;
	private _suscriptions: Array<Subscription>;

	constructor(
		private searchTutoringOffersAnsTutorsService: SearchTutoringOffersAnsTutorsService
	) {
		this._suscriptions = new Array<Subscription>();

		this._suscriptions.push(
			this.searchTutoringOffersAnsTutorsService.tutorsObservable.subscribe(
				{
					next: (tutors: Array<TutorInfo>) => {
						this.tutors = tutors;
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
