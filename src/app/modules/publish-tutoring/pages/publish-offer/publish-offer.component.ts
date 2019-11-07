import { Component, OnInit } from '@angular/core';
import { PublishTutoringService } from '../../services/index';
import { TutoringOffer, Course } from 'src/app/shared/models';
import { CourseService, TutorService } from '../../../../core/http/index';
import { TutoringOfferRequest } from 'src/app/shared/dtos/Input/TutoringOfferRequest';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
	selector: 'app-publish-offer',
	templateUrl: './publish-offer.component.html',
	styleUrls: ['./publish-offer.component.scss']
})
export class PublishOfferComponent implements OnInit {


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

	constructor(
		private tutoringService: PublishTutoringService,
		private coursesService: CourseService,
		private route: ActivatedRoute,
		private tutorService: TutorService,
		private router: Router) { }

	async ngOnInit() {
		this.tutoringOffer.tutorId = +this.route.snapshot.paramMap.get('id');
		this.tutoringOffer.universityId = await this.tutorService.findUniversityId(this.tutoringOffer.tutorId);
		this.avaliableCourses = await this.coursesService.findByUniversityId(this.tutoringOffer.universityId );
	}

	selectCourse(courseId) {
		console.log(courseId);
		if (courseId !== 0) {
			this.tutoringOffer.courseId = courseId;
		} else {
			this.tutoringOffer.courseId = null;
		}

	}

	checkErrors() {

	}

	crearOferta() {
		this.tutoringService.createOffer(this.tutoringOffer);
		this.router.navigate(['publish-session' ] , {relativeTo: this.route});
	}


}
