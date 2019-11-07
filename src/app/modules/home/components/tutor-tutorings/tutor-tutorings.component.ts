import { Component, OnInit } from "@angular/core";
import {
	TutoringOfferService,
	UniversityService,
	AuthenticationService
} from "src/app/core";
import { TutoringOfferInfo } from "src/app/shared/dtos/Input";
import { UserCredentials } from "src/app/shared/dtos/UserCredential";
import { TutoringOffer } from "src/app/shared/models";
import { ColorService } from "src/app/core/services";

@Component({
	selector: "app-tutor-tutorings",
	templateUrl: "./tutor-tutorings.component.html",
	styleUrls: ["./tutor-tutorings.component.scss"]
})
export class TutorTutoringsComponent implements OnInit {
	public tutoringOffers: Array<TutoringOfferInfo>;
	public colors: string[];

	constructor(
		private _tutoringOfferService: TutoringOfferService,
		private _authenticationService: AuthenticationService,
		private _colorService: ColorService
	) {}

	public async ngOnInit() {
		this.tutoringOffers = new Array<TutoringOfferInfo>();

		try {
			const user: UserCredentials = this._authenticationService.userValue;

			// TODO: Utilizar las credenciales del usuario

			this.tutoringOffers = await this._tutoringOfferService.findAllByTutorId(
				user.id
			);

			this.generateRandomColors();
		} catch (error) {
			console.log("ERROR EN TUTOR-TUTORINGS-COMPONENT");
		}
	}

	public generateRandomColors(): void {
		const size: number = this.tutoringOffers.length;
		this.colors = new Array<string>();

		for (let i = 0; i < size; ++i) {
			this.colors.push(this._colorService.generateRandomColorString());
		}
	}
}
