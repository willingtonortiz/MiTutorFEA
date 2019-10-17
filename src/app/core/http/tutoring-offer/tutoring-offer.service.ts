import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { TutoringOffer, Person, Course } from "src/app/shared/models";
import { Observable } from "rxjs";

interface TutoringOfferWithPersonAndCourse {
	tutoringOffer: TutoringOffer;
	person: Person;
	course: Course;
}

@Injectable({
	providedIn: "root"
})
export class TutoringOfferService {
	public constructor(private httpClient: HttpClient) {}

	public findByUniversityAndCourse(
		universityId: number,
		courseId: number
	): Observable<TutoringOfferWithPersonAndCourse[]> {
		return this.httpClient.get<TutoringOfferWithPersonAndCourse[]>(
			`${environment.apiUrl}/universities/${universityId}/courses/${courseId}/tutoringoffers`
		);
	}
}
