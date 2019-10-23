import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { TutoringOffer, Person, Course } from "src/app/shared/models";
import { Observable } from "rxjs";
import { TutoringOfferInfo } from "src/app/shared/dtos";

@Injectable({
	providedIn: "root"
})
export class TutoringOfferService {
	public constructor(private httpClient: HttpClient) {}

	public findByUniversityIdAndCourseId(
		universityId: number,
		courseId: number
	): Promise<Array<TutoringOfferInfo>> {
		return this.httpClient
			.get<Array<TutoringOfferInfo>>(
				`${environment.apiUrl}/universities/${universityId}/courses/${courseId}/tutoringoffers`
			)
			.toPromise<Array<TutoringOfferInfo>>();
	}
}
