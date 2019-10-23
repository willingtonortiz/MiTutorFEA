import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Course } from "src/app/shared/models";
import { environment } from "src/environments/environment";
import { map } from "rxjs/operators";

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
}
