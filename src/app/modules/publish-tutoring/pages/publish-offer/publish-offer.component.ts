import { Component, OnInit } from "@angular/core";
import { PublishTutoringService } from "../../services/index";
import { TutoringOffer, Course } from "src/app/shared/models";
import { CourseService, TutorService } from "../../../../core/http/index";
import { TutoringOfferRequest } from "src/app/shared/dtos/Input/TutoringOfferRequest";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { UserCredentials } from "src/app/shared/dtos/UserCredential";
import { AuthenticationService } from "src/app/core";

@Component({
	selector: "app-publish-offer",
	templateUrl: "./publish-offer.component.html",
	styleUrls: ["./publish-offer.component.scss"]
})
export class PublishOfferComponent implements OnInit {
	public currentUser: UserCredentials;
	public tutoringOffer = {
		capacity: null,
		description: "",
		courseId: null,
		tutorId: null,
		universityId: null,
		tutoringSessions: []
	} as TutoringOfferRequest;

	public avaliableCourses: Array<Course>;
	public errors: Array<string> = [];

	constructor(
		private _tutoringService: PublishTutoringService,
		private _coursesService: CourseService,
		private _route: ActivatedRoute,
		private _tutorService: TutorService,
		private _router: Router,
		private _authenticationService: AuthenticationService
	) {
		this.currentUser = this._authenticationService.userValue;
	}

	async ngOnInit() {
		// this.tutoringOffer.tutorId = +this.route.snapshot.paramMap.get("id");
		this.tutoringOffer.tutorId = this.currentUser.id;
		this.tutoringOffer.universityId = await this._tutorService.findUniversityId(
			this.currentUser.id
		);
		this.avaliableCourses = await this._coursesService.findByUniversityId(
			this.tutoringOffer.universityId
		);
	}

	selectCourse(courseId) {
		console.log(courseId);
		if (courseId !== 0) {
			this.tutoringOffer.courseId = courseId;
		} else {
			this.tutoringOffer.courseId = null;
		}
	}

	checkErrors() {}

	crearOferta() {
		this._tutoringService.createOffer(this.tutoringOffer);
		this._router.navigate(["publish-session"], { relativeTo: this._route });
	}
}
