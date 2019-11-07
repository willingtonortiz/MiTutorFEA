import { Component, OnInit } from "@angular/core";
import {
	CourseService,
	UniversityService,
	AuthenticationService
} from "src/app/core";
import {
	FormBuilder,
	FormGroup,
	Validators,
	FormControl
} from "@angular/forms";
import { Course } from "src/app/shared/models";
import { ModalManagerService, CourseListService } from "../../services";
import { University } from "src/app/shared/models/University/University";

@Component({
	selector: "app-add-course-modal",
	templateUrl: "./add-course-modal.component.html",
	styleUrls: ["./add-course-modal.component.scss"]
})
export class AddCourseModalComponent implements OnInit {
	public backgroundColor: string;
	public addCourseForm: FormGroup;
	public errorType: number;

	constructor(
		private _courseService: CourseService,
		private _formBuilder: FormBuilder,
		private _modalManagerService: ModalManagerService,
		private _tutorCourseListService: CourseListService,
		private _universityService: UniversityService,
		private _authenticationService: AuthenticationService
	) {
		this.addCourseForm = this._formBuilder.group({
			courseName: new FormControl("", [Validators.required])
		});
		this.errorType = 0;
	}

	ngOnInit() {
		const redRandom: number = Math.round(Math.random() * 255);
		const greenRandom: number = Math.round(Math.random() * 255);
		const blueRandom: number = Math.round(Math.random() * 255);
		const alpha = 0.25;

		this.backgroundColor = `rgba(${redRandom},${greenRandom},${blueRandom}, ${alpha})`;
	}

	public async addCourse() {
		if (this.addCourseForm.valid) {
			try {
				this.errorType = 0;

				const userId: number = this._authenticationService.userValue.id;

				const university: University = await this._universityService.findByUserId(
					userId
				);

				const foundCourse: Course = await this._courseService.findByUniversityIdAndCourseName(
					university.id,
					this.courseName
				);

				const result = await this._courseService.addCourseToTutorByTutorIdAndCourseId(
					userId,
					foundCourse.id
				);

				this._modalManagerService.closeModal();
				this._tutorCourseListService.updateCourseList();
			} catch (error) {
				if (error.error === null) {
					this.errorType = 2;
				} else {
					this.errorType = error.error;
				}
				console.log("Error en AddCourseModalComponent");
			}
		}
	}

	get courseName(): string {
		return this.addCourseForm.get("courseName").value;
	}
}
