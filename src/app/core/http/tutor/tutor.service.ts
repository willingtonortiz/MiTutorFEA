import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TutorInfo } from "src/app/shared/dtos/Input";
import { environment } from "src/environments/environment";

@Injectable({
	providedIn: "root"
})
export class TutorService {
	constructor(private httpClient: HttpClient) {}

	public findByUniversityIdAndCourseId(
		universityId: number,
		courseId: number
	): Promise<Array<TutorInfo>> {
		return this.httpClient
			.get<Array<TutorInfo>>(
				`${environment.apiUrl}/universities/${universityId}/courses/${courseId}/tutors`
			)
			.toPromise<Array<TutorInfo>>();
	}

	public findUniversityId(tutorId: number): Promise<number>{
		return this.httpClient
			.get<number>(
				`${environment.apiUrl}/tutors/${tutorId}/university`
			)
			.toPromise<number>();
	}
}
