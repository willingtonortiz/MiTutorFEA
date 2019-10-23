import { Component, OnInit } from "@angular/core";
import { TutoringOfferService, CourseService } from "src/app/core";
import { Course } from "src/app/shared/models";
import { TutoringOfferInfo } from "src/app/shared/dtos";

@Component({
	selector: "app-home-page",
	templateUrl: "./home-page.component.html",
	styleUrls: ["./home-page.component.scss"]
})
export class HomePageComponent implements OnInit {
	public tutoringOffers: Array<TutoringOfferInfo>;
	public courseName: string = "";

	constructor(
		private tutoringOfferService: TutoringOfferService,
		private courseService: CourseService
	) {}

	ngOnInit() {
		// Se debe quitar esto

		// this.courseName = "calculo 2";
		this.onEnter();
	}

	public async onEnter() {
		if (this.courseName.length === 0) {
			return;
		}

		try {
			// Finding course
			const course: Course = await this.courseService.findByUniversityIdAndCourseName(
				10,
				this.courseName.toLowerCase()
			);

			// Finding tutoring offers
			const tutoringOffers: Array<
				TutoringOfferInfo
			> = await this.tutoringOfferService.findByUniversityIdAndCourseId(
				10,
				course.courseId
			);

			this.tutoringOffers = tutoringOffers;
		} catch (error) {
			this.tutoringOffers = [];
		}
	}
}
