import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Course } from "src/app/shared/models";
import { environment } from "src/environments/environment";

@Injectable({
	providedIn: "root"
})
export class CourseService {
	constructor(private httpClient: HttpClient) {}

	public findByUniversityIdAndCourseName(
		universityId: number,
		courseName: string
	): Promise<Course> {
		return this.httpClient
			.get<Array<Course>>(
				`${environment.apiUrl}/universities/${universityId}/courses`,
				{
					params: {
						courseName
					}
				}
			)
			.pipe(
				map((courses: Array<Course>) => {
					return courses[0];
				})
			)
			.toPromise<Course>();
	}

	public findAllByTutorId(tutorId: number): Promise<Array<Course>> {
		return this.httpClient
			.get<Array<Course>>(
				`${environment.apiUrl}/tutors/${tutorId}/courses`
			)
			.toPromise<Array<Course>>();
	}

	public addCourseToTutorByTutorIdAndCourseId(
		tutorId: number,
		courseId: number
	): Promise<number> {
		return this.httpClient
			.post<number>(
				`${environment.apiUrl}/tutors/${tutorId}/courses`,
				courseId
			)
			.toPromise<number>();
	}
}
