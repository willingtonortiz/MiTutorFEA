import { Injectable } from "@angular/core";
import { Subject, BehaviorSubject, Observable } from "rxjs";
import { Course } from "src/app/shared/models";
import { CourseService } from "src/app/core";

@Injectable({
	providedIn: "root"
})
export class CourseListService {
	private _courseListSubject: BehaviorSubject<Array<Course>>;
	private _courseListObservable: Observable<Array<Course>>;

	constructor(private courseService: CourseService) {
		this._courseListSubject = new BehaviorSubject<Array<Course>>(
			new Array<Course>()
		);

		this._courseListObservable = this._courseListSubject.asObservable();
	}

	public async updateCourseList(tutorId: number): Promise<void> {
		const courses: Array<
			Course
		> = await this.courseService.findAllByTutorId(tutorId);
		this._courseListSubject.next(courses);
	}

	get courseListValue(): Array<Course> {
		return this._courseListSubject.value;
	}

	get courseListObservable(): Observable<Array<Course>> {
		return this._courseListObservable;
	}
}
