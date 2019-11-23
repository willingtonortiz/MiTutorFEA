import { Component, OnInit } from '@angular/core';
import { TutoringOfferResponse } from 'src/app/shared/dtos/Output/TutoringOfferResponse';
import { ViewTutoringService } from '../../services';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Time } from '@angular/common';

@Component({
  selector: 'app-tutoring-offer',
  templateUrl: './tutoring-offer.component.html',
  styleUrls: ['./tutoring-offer.component.scss']
})
export class TutoringOfferComponent implements OnInit {

	public tutoringOffer: TutoringOfferResponse;
	public date: Date;
	public startTime: Time;
	public endTime: Time;
	constructor(
		private viewTutoringService: ViewTutoringService,
		private route: ActivatedRoute,
		private router: Router
		) {}

	async ngOnInit() {
		this.tutoringOffer = await this.viewTutoringService.getTutoringOffer(+this.route.snapshot.paramMap.get('id'));
<<<<<<< HEAD

=======
		console.log(this.tutoringOffer)
>>>>>>> 6eacd9b12adc65f2c273f4d6ad0e8b0bb801ea42
	}

	viewSession(index) {
		this.router.navigate(['tutoring-session/' + this.tutoringOffer.tutoringSessionResponses[index].id] , {relativeTo: this.route});
	}

}
