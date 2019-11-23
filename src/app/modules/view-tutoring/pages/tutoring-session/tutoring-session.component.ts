import { Component, OnInit } from '@angular/core';
import { ViewTutoringService } from '../../services';
import { TutoringSessionResponse } from 'src/app/shared/dtos/Output/TutoringSessionResponse';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-tutoring-session',
  templateUrl: './tutoring-session.component.html',
  styleUrls: ['./tutoring-session.component.scss']
})
export class TutoringSessionComponent implements OnInit {


	public tutoringSession: TutoringSessionResponse;
	public tutor: string;
	public date: string;
	public startTime: string;
	public endTime: string;

	constructor(
		private viewTutoringService: ViewTutoringService,
		private route: ActivatedRoute,
		private router: Router
		) { }

	async ngOnInit() {
		this.tutoringSession = await this.viewTutoringService.getTutoringSession(
			+this.route.snapshot.paramMap.get('id'),
			+this.route.snapshot.paramMap.get('sessionid'));

		this.tutor = await this.viewTutoringService.getTutor(+this.route.snapshot.paramMap.get('id'));

		if	(this.tutoringSession.studentCount == null){
			this.tutoringSession.studentCount = 0;
		}

		this.date = new Date(this.tutoringSession.startTime).toLocaleDateString();
		this.startTime = new Date(this.tutoringSession.startTime).toLocaleTimeString();
		this.endTime =  new Date(this.tutoringSession.endTime).toLocaleTimeString();
	}

}
