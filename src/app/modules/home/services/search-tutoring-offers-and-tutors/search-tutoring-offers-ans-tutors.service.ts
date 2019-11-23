import { Injectable } from "@angular/core";
import { Course, Tutor } from "src/app/shared/models";
import {
	CourseService,
	TutoringOfferService,
	TutorService,
	AuthenticationService,
	UniversityService
} from "src/app/core";
import { TutoringOfferInfo, TutorInfo } from "src/app/shared/dtos/Input";
import { BehaviorSubject, Observable } from "rxjs";
import { University } from "src/app/shared/models/University/University";

@Injectable({
	providedIn: "root"
})
// TODO, se debe obtener la universidad del usuario
// TODO: Arreglar el nombre de esta clase
export class SearchTutoringOffersAnsTutorsService {
	private _tutoringOffersSubject: BehaviorSubject<Array<TutoringOfferInfo>>;
	private _tutoringOffersObservable: Observable<Array<TutoringOfferInfo>>;

	private _tutorsSubject: BehaviorSubject<Array<TutorInfo>>;
	private _tutorsObservable: Observable<Array<TutorInfo>>;

	public constructor(
		private authenticationService: AuthenticationService,
		private courseService: CourseService,
		private tutoringOfferService: TutoringOfferService,
		private tutorService: TutorService,
		private universityService: UniversityService
	) {
		this._tutoringOffersSubject = new BehaviorSubject<
			Array<TutoringOfferInfo>
		>(new Array<TutoringOfferInfo>());

		this._tutoringOffersObservable = this._tutoringOffersSubject.asObservable();

		this._tutorsSubject = new BehaviorSubject<Array<TutorInfo>>(
			new Array<TutorInfo>()
		);

		// this._tutorsSubject.next([
		// 	{
		// 		id: 133,
		// 		career: "Ingenieria de software",
		// 		fullName: "Daniel Iglesias",
		// 		points: 3.68
		// 	},
		// 	{
		// 		id: 133,
		// 		career: "Ingenieria de software",
		// 		fullName: "Daniel Iglesias",
		// 		points: 3.68
		// 	}
		// ]);

		this._tutorsObservable = this._tutorsSubject.asObservable();
	}

	public async findTutorigOffersByCourseName(
		courseName: string
	): Promise<void> {
		try {
			const userId: number = this.authenticationService.userValue.id;
			const university: University = await this.universityService.findByUserId(
				userId
			);

			// Finding course
			const course: Course = await this.courseService.findByUniversityIdAndCourseName(
				university.id,
				courseName.toLowerCase()
			);

			// Finding tutoring offers
			const tutoringOffers: Array<TutoringOfferInfo> = await this.tutoringOfferService.findByUniversityIdAndCourseId(
				university.id,
				course.id
			);

			this._tutoringOffersSubject.next(tutoringOffers);
		} catch (error) {
			this._tutoringOffersSubject.next(new Array<TutoringOfferInfo>());
		}
	}

	public async findTutorsByCourseName(courseName: string): Promise<void> {
		try {
			const userId: number = this.authenticationService.userValue.id;
			const university: University = await this.universityService.findByUserId(
				userId
			);

			// Finding course
			const course: Course = await this.courseService.findByUniversityIdAndCourseName(
				university.id,
				courseName.toLowerCase()
			);

			// Finding tutors
			const tutors: Array<TutorInfo> = await this.tutorService.findByUniversityIdAndCourseId(
				university.id,
				course.id
			);

			this._tutorsSubject.next(tutors);
		} catch (error) {
			this._tutorsSubject.next(new Array<TutorInfo>());
		}
	}

	get tutoringOffersValue(): Array<TutoringOfferInfo> {
		return this._tutoringOffersSubject.value;
	}
	get tutoringOffersObservable(): Observable<Array<TutoringOfferInfo>> {
		return this._tutoringOffersObservable;
	}
	get tutorsValue(): Array<TutorInfo> {
		return this._tutorsSubject.value;
	}
	get tutorsObservable(): Observable<Array<TutorInfo>> {
		return this._tutorsObservable;
	}
}
