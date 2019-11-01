import { Component, OnInit, OnDestroy } from "@angular/core";
import { CourseListService } from "../../services";
import { Course } from "src/app/shared/models";
import { Subscription } from "rxjs";

@Component({
	selector: "app-course-list",
	templateUrl: "./course-list.component.html",
	styleUrls: ["./course-list.component.scss"]
})
export class CourseListComponent implements OnInit, OnDestroy {
	private _suscriptions: Array<Subscription>;
	public courses: Array<Course>;

	constructor(private _tutorCourseListService: CourseListService) {
		this._suscriptions = new Array<Subscription>();

		this._suscriptions.push(
			_tutorCourseListService.courseListObservable.subscribe({
				next: (courses: Array<Course>) => {
					this.courses = courses;
				},
				error: error => {
					console.log(error);
				}
			})
		);
	}

	ngOnInit() {}

	ngOnDestroy() {
		this._suscriptions.forEach(x => x.unsubscribe());
	}
}
