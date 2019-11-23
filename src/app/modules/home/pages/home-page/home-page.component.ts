import { Component, OnInit } from "@angular/core";
import {
	TutoringOfferService,
	CourseService,
	AuthenticationService
} from "src/app/core";
import { Course } from "src/app/shared/models";
import { TutoringOfferInfo, TutorInfo } from "src/app/shared/dtos/Input";
import { SearchTutoringOffersAnsTutorsService } from "../../services";
import { Router } from "@angular/router";
import { ViewTutoringService } from 'src/app/modules/view-tutoring/services';
import { TutoringSessionUser } from 'src/app/shared/dtos/Output/TutoringSessionUser';

@Component({
	selector: "app-home-page",
	templateUrl: "./home-page.component.html",
	styleUrls: ["./home-page.component.scss"]
})
export class HomePageComponent implements OnInit {
	public courseName: string = "";
	private name: string;
	public mySessions: any;
	constructor(
		private _searchTutoringOffersAnsTutorsService: SearchTutoringOffersAnsTutorsService,
		private _authenticationService: AuthenticationService,
		private _router: Router,
		private _tutoringSessionService:ViewTutoringService
	) {}

	 async ngOnInit() {

		this.onEnter();
		await this._tutoringSessionService.getAllTutoringSessionByUser(this._authenticationService.userValue.id).then( data=>{
			this.mySessions = data;

		});

		this.name =  this._authenticationService.userValue.name;


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

	public logout() {
		this._authenticationService.logout();
		this._router.navigate(["/login"]);
	}
}
