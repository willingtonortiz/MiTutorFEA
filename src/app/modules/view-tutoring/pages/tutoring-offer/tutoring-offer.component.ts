import { Component, OnInit } from '@angular/core';
import { TutoringOfferResponse } from 'src/app/shared/dtos/Output/TutoringOfferResponse';
import { ViewTutoringService } from '../../services';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-tutoring-offer',
  templateUrl: './tutoring-offer.component.html',
  styleUrls: ['./tutoring-offer.component.scss']
})
export class TutoringOfferComponent implements OnInit {

	public tutoringOffer: TutoringOfferResponse;
	constructor(
		private viewTutoringService: ViewTutoringService,
		private route: ActivatedRoute,
		private router: Router
		) {}

	async ngOnInit() {
		this.tutoringOffer = await this.viewTutoringService.getTutoringOffer(+this.route.snapshot.paramMap.get('id'));
		console.log(this.tutoringOffer)
	}

	viewSession(index) {
		this.router.navigate(['tutoring-session/' + this.tutoringOffer.tutoringSessionResponses[index].id] , {relativeTo: this.route});
	}

}
