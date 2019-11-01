import { Component, OnInit } from "@angular/core";
import { TutoringOfferService, CourseService } from "src/app/core";
import { Course } from "src/app/shared/models";
import { TutoringOfferInfo, TutorInfo } from "src/app/shared/dtos/Input";
import { SearchTutoringOffersAnsTutorsService } from "../../services";

@Component({
	selector: "app-home-page",
	templateUrl: "./home-page.component.html",
	styleUrls: ["./home-page.component.scss"]
})
export class HomePageComponent implements OnInit {
	public courseName: string = "";

	constructor(
		private _searchTutoringOffersAnsTutorsService: SearchTutoringOffersAnsTutorsService
	) {}

	ngOnInit() {
		// Se debe quitar esto
		this.courseName = "calculo 2";
		this.onEnter();
	}

	public async onEnter() {
		if (this.courseName.length === 0) {
			return;
		}

		this._searchTutoringOffersAnsTutorsService.findTutorigOffersByCourseName(
			this.courseName
		);

		this._searchTutoringOffersAnsTutorsService.findTutorsByCourseName(
			this.courseName
		);
	}
}
