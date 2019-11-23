import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TutoringOfferRequest } from 'src/app/shared/dtos/Input/TutoringOfferRequest';
import { TutoringSessionRequest } from 'src/app/shared/dtos/Input/TutoringSessionRequest';

@Injectable({
	providedIn: 'root'
})
export class PublishTutoringService {

	private tutoringOfferSubject: BehaviorSubject<TutoringOfferRequest>;
	private tutoringOfferObservable: Observable<TutoringOfferRequest>;

	constructor(private http: HttpClient) {
		this.tutoringOfferSubject = new BehaviorSubject<TutoringOfferRequest>(null);
		this.tutoringOfferObservable = this.tutoringOfferSubject.asObservable();
	}

	public createOffer(tutoringOffer: TutoringOfferRequest) {
		this.tutoringOfferSubject.next(tutoringOffer);
	}

	public createSession(tutoringSession: TutoringSessionRequest) {
		let tutoringOfferAux = this.tutoringOfferSubject.value;
		tutoringOfferAux.tutoringSessions.push(tutoringSession);
		this.tutoringOfferSubject.next(tutoringOfferAux);

	}

	public sessionSize() {
		return this.tutoringOfferSubject.value.tutoringSessions.length;
	}

	public offerCourse(){
		return this.tutoringOfferSubject.value.courseId;
	}

	public setSessions( tutoringSessions: Array<TutoringSessionRequest>){
		let tutoringOfferAux = this.tutoringOfferSubject.value;
		tutoringOfferAux.tutoringSessions = tutoringSessions;
		this.tutoringOfferSubject.next(tutoringOfferAux);

	}

	public publishTutoring():Promise<any>  {

		let tutoringOffer = this.tutoringOfferSubject.value;
		return this.http.post(`${environment.apiUrl}/tutoringoffers`,tutoringOffer).toPromise<any>();
	}

}


