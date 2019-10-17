import { Component, OnInit } from "@angular/core";
import { TutoringOfferService, CourseService } from "src/app/core";
import { Course } from "src/app/shared/models";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
	selector: "app-home-page",
	templateUrl: "./home-page.component.html",
	styleUrls: ["./home-page.component.scss"]
})
export class HomePageComponent implements OnInit {
	public tutoringOffers: any[];
	public courseName: string = "";
	public isSearching: boolean = false;
	public courseNotFound: boolean = false;
	public tutoringsNotFound: boolean = false;

	constructor(
		private tutoringOfferService: TutoringOfferService,
		private courseService: CourseService
	) {}

	ngOnInit() {
		this.courseName = "calculo 2";
		this.onEnter();
	}

	public onEnter() {
		if (this.courseName.length === 0) {
			this.isSearching = false;
			return;
		}
		// console.log(this.courseName.toLowerCase())

		const courseSuscription = this.courseService
			.findByName(10, this.courseName.toLowerCase())
			.subscribe({
				next: (course: Course) => {
					courseSuscription.unsubscribe();
					this.courseNotFound = false;

					const tutoringOfferSuscription = this.tutoringOfferService
						.findByUniversityAndCourse(10, course.courseId)
						.subscribe({
							next: (data: any[]) => {
								this.tutoringOffers = data;
								this.isSearching = true;
								this.tutoringsNotFound = false;
								tutoringOfferSuscription.unsubscribe();
							},
							error: (error: HttpErrorResponse) => {
								if (error.status === 404) {
									this.tutoringsNotFound = true;
								}
							}
						});
				},
				error: (error: HttpErrorResponse) => {
					if (error.status === 404) {
						this.courseNotFound = true;
					}
				}
			});
		// .unsubscribe();
	}
}
