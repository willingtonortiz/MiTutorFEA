import { Component, OnInit } from '@angular/core';
import { PublishTutoringService } from '../../services/index';
import { TutoringOffer, Course } from 'src/app/shared/models';
import { CourseService } from '../../../../core/http/index';

@Component({
	selector: 'app-publish-offer',
	templateUrl: './publish-offer.component.html',
	styleUrls: ['./publish-offer.component.scss']
})
export class PublishOfferComponent implements OnInit {

	private tutoringOffer: TutoringOffer;
	private avaliablesCourses: Array<Course>;

	constructor(private tutoringService: PublishTutoringService, private coursesService: CourseService) { }

	ngOnInit() {
		this.avaliablesCourses =


	}

}
