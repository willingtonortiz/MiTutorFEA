import { Component, OnInit } from '@angular/core';
import { TutoringOfferResponse } from 'src/app/shared/dtos/Output/TutoringOfferResponse';
import { ViewTutoringService } from '../../services';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Time } from '@angular/common';
import { AuthenticationService } from 'src/app/core';

@Component({
  selector: 'app-tutoring-offer',
  templateUrl: './tutoring-offer.component.html',
  styleUrls: ['./tutoring-offer.component.scss']
})
export class TutoringOfferComponent implements OnInit {

	public tutoringOffer: TutoringOfferResponse;
	public date: string;
	public startTime: string;
	public endTime: string;
	public name:string
	constructor(
		private viewTutoringService: ViewTutoringService,
		private route: ActivatedRoute,
		private router: Router,
		private authenticationService:AuthenticationService
		) {}

	async ngOnInit() {
		this.tutoringOffer = await this.viewTutoringService.getTutoringOffer(+this.route.snapshot.paramMap.get('id'));

		this.date = new Date(this.tutoringOffer.startTime).toLocaleDateString();
		this.startTime = new Date(this.tutoringOffer.startTime).toLocaleTimeString();
		this.endTime =  new Date(this.tutoringOffer.endTime).toLocaleTimeString();
		this.name =  this.authenticationService.userValue.name;
	}

	viewSession(index) {
		this.router.navigate(['tutoring-session/' + this.tutoringOffer.tutoringSessionResponses[index].id] , {relativeTo: this.route});
	}

}
