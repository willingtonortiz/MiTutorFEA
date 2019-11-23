import { Component, OnInit } from "@angular/core";
import { ViewTutoringService } from "../../services";
import { TutoringSessionResponse } from "src/app/shared/dtos/Output/TutoringSessionResponse";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { AuthenticationService, QualificationService } from "src/app/core";

@Component({
	selector: "app-tutoring-session",
	templateUrl: "./tutoring-session.component.html",
	styleUrls: ["./tutoring-session.component.scss"]
})
export class TutoringSessionComponent implements OnInit {
	public tutoringSession: TutoringSessionResponse;
	public tutorId: number;
	public date: string;
	public startTime: string;
	public endTime: string;
	public qualifications: any;
	public name:string;
	constructor(
		private viewTutoringService: ViewTutoringService,
		private route: ActivatedRoute,
		private router: Router,
		private authenticationService: AuthenticationService,
		private qualificationService: QualificationService
	) {}

	async ngOnInit() {
		this.tutoringSession = await this.viewTutoringService.getTutoringSession(
			+this.route.snapshot.paramMap.get("id"),
			+this.route.snapshot.paramMap.get("sessionid")
		);

		this.tutorId = await this.viewTutoringService.getTutor(
			+this.route.snapshot.paramMap.get("id")
		);
		if (this.tutoringSession.studentCount == null) {
			this.tutoringSession.studentCount = 0;
		}
		this.qualifications = this.getQualificationsOfTutor();

		this.date = new Date(
			this.tutoringSession.startTime
		).toLocaleDateString();
		this.startTime = new Date(
			this.tutoringSession.startTime
		).toLocaleTimeString();
		this.endTime = new Date(
			this.tutoringSession.endTime
		).toLocaleTimeString();

		this.name = this.authenticationService.userValue.name;
	}

	async reserve(e) {
		await this.viewTutoringService
			.reserveTutoringSession(e, this.authenticationService.userValue.id)
			.then(() => {
				this.router.navigate(["home"]);
			});
	}

	async getQualificationsOfTutor() {
		await this.qualificationService
			.getQualificationsByTutor(this.tutorId)
			.then(data => {
				this.qualifications =  data;
			});
	}
}
