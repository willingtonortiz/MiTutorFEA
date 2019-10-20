import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Course } from "src/app/shared/models";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

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
			.get<Course>(
				`${environment.apiUrl}/universities/${universityId}/courses?courseName=${courseName}`
			)
			.toPromise<Course>();
	}
}
