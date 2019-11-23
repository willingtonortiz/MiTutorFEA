import { Component, OnInit } from '@angular/core';
import { PublishTutoringService } from '../../services/index';
import { TutoringOffer, Course } from 'src/app/shared/models';
import { CourseService, TutorService } from '../../../../core/http/index';
import { TutoringOfferRequest } from 'src/app/shared/dtos/Input/TutoringOfferRequest';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserCredentials } from 'src/app/shared/dtos/UserCredential';
import { AuthenticationService } from 'src/app/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {capacityValidator, courseValidator} from '../../validators/publish-offer-validators';

@Component({
	selector: 'app-publish-offer',
	templateUrl: './publish-offer.component.html',
	styleUrls: ['./publish-offer.component.scss']
})
export class PublishOfferComponent implements OnInit {
	public currentUser: UserCredentials;
	public tutoringOffer = {
		capacity: null,
		description: '',
		courseId: null,
		tutorId: null,
		universityId: null,
		tutoringSessions: []
	} as TutoringOfferRequest;

	public avaliableCourses: Array<Course>;
	public errors: Array<string> = [];
	public offerForm: FormGroup;

	createFormGroup() {
		return new FormGroup({
			course: new FormControl('', [Validators.required, courseValidator]),
			capacity: new FormControl('', [Validators.required, capacityValidator]),
			description: new FormControl('', [Validators.required]),
		});
	}

	constructor(
		private _tutoringService: PublishTutoringService,
		private _coursesService: CourseService,
		private _route: ActivatedRoute,
		private _tutorService: TutorService,
		private _router: Router,
		private _authenticationService: AuthenticationService
	) {
		this.currentUser = this._authenticationService.userValue;
		this.offerForm = this.createFormGroup();
	}

	get course() {
		return this.offerForm.get('course');
	}

	get capacity() {
		return this.offerForm.get('capacity');
	}

	get description() {
		return this.offerForm.get('description');
	}



	revert() {
		this.offerForm.reset();
	}


	async ngOnInit() {
		// this.tutoringOffer.tutorId = +this.route.snapshot.paramMap.get("id");
		this.tutoringOffer.tutorId = this.currentUser.id;
		this.tutoringOffer.universityId = await this._tutorService.findUniversityId(
			this.currentUser.id
		);
		this.avaliableCourses = await this._coursesService.findByUniversityId(
			this.tutoringOffer.universityId
		);
	}

	selectCourse(courseId) {
		if (courseId !== 0) {
			this.tutoringOffer.courseId = courseId;
		} else {
			this.tutoringOffer.courseId = null;
		}
	}

	checkErrors() {
		return  (this.offerForm.controls.capacity.hasError('invalidNumber') || this.offerForm.controls.capacity.hasError('required')
				|| this.offerForm.controls.course.hasError('invalidNumber') || this.offerForm.controls.course.hasError('required')
				||  this.offerForm.controls.description.hasError('required'));
	}

	createOffer() {

		if (!this.checkErrors() && this.offerForm.dirty && this.offerForm.touched) {
			this.tutoringOffer.capacity = this.offerForm.value.capacity;
			this.tutoringOffer.courseId = this.offerForm.value.course;
			this.tutoringOffer.description = this.offerForm.value.description;
			this._tutoringService.createOffer(this.tutoringOffer);
			this._router.navigate(['publish-session'], { relativeTo: this._route });
		}
	}



}
