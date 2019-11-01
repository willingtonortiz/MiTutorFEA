import { Component, OnInit } from "@angular/core";
import { ModalManagerService, CourseListService } from "../../services";

@Component({
	selector: "app-courses-container",
	templateUrl: "./courses-container.component.html",
	styleUrls: ["./courses-container.component.scss"]
})
export class CoursesContainerComponent implements OnInit {
	constructor(
		private _modalManagerService: ModalManagerService,
		private _tutorCourseListService: CourseListService
	) {}

	ngOnInit() {
		this._tutorCourseListService.updateCourseList(7);
	}

	public addCourse() {
		this._modalManagerService.openModal();
	}
}
