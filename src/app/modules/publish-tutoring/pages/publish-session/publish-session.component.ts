import { Component, OnInit } from "@angular/core";
import { PublishTutoringService } from "../../services/index";
import { TutoringSessionRequest } from "src/app/shared/dtos/Input/TutoringSessionRequest";
import { Topic } from "src/app/shared/models/topic/Topic";
import { TopicService, CourseService } from "src/app/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { dateValidator } from '../../validators/publish-session-validators';
import { Time } from '@angular/common';

@Component({
	selector: "app-publish-session",
	templateUrl: "./publish-session.component.html",
	styleUrls: ["./publish-session.component.scss"]
})
export class PublishSessionComponent implements OnInit {
	public tutoringSession = {
		place: "",
		startTime: null,
		endTime: null,
		description: "",
		price: null,
		topics: []
	} as TutoringSessionRequest;

	public avaliableTopics: Array<Topic> = [];
	public selectedTopics: Array<Topic> = [];
	public sessionsCreated: Array<TutoringSessionRequest> = [];
	public sessionForm: FormGroup;
	public timeError = false;

	createFormGroup() {
		return new FormGroup({
			place: new FormControl('', [Validators.required]),
			sessionDate: new FormControl('', [Validators.required, dateValidator]),
			startTime: new FormControl('', [Validators.required]),
			endTime: new FormControl('', [Validators.required]),
			description: new FormControl('', [Validators.required]),
			price: new FormControl('', [Validators.required]),
			topic: new FormControl(''),
		});
	}

	constructor(
		private courseService: CourseService,
		private tutoringService: PublishTutoringService,
		private _router: Router
	) {
		this.sessionForm = this.createFormGroup();
	}

	get place() {
		return this.sessionForm.get('place');
	}

	get sessionDate() {
		return this.sessionForm.get('sessionDate');
	}

	get startTime() {
		return this.sessionForm.get('startTime');
	}

	get endTime() {
		return this.sessionForm.get('endTime');
	}

	get description() {
		return this.sessionForm.get('description');
	}

	get price() {
		return this.sessionForm.get('price');
	}

	get topic() {
		return this.sessionForm.get('topic');
	}

	checkTimes() {
		if (this.sessionForm.controls.startTime.value.length > 0 && this.sessionForm.controls.endTime.value.length > 0) {
			let startAux = this.sessionForm.controls.startTime.value.split(':');
			let endAux = this.sessionForm.controls.endTime.value.split(':');
			if (startAux[0] + startAux[1] > endAux[0] + endAux[1]) {
				this.timeError = true;
			} else {
				this.timeError = false;
			}
		}
	}

	async ngOnInit() {
		this.avaliableTopics = await this.courseService.findTopics(
			this.tutoringService.offerCourse()
		);
	}

	private checkRepeatedTopics(topicId: number) {
		for (let i = 0, length = this.selectedTopics.length; i < length; ++i) {
			if (this.selectedTopics[i].id === topicId) {
				return true;
			}
		}
		return false;
	}

	selectTopic() {

		console.log(this.sessionForm.controls.topic.value);

		if (
			this.sessionForm.controls.topic.value != 0 &&
			!this.checkRepeatedTopics(this.sessionForm.controls.topic.value.id)
		) {
			this.selectedTopics.push(this.sessionForm.controls.topic.value);
		}
	}

	deleteTopic(topicId: number) {
		this.selectedTopics = this.selectedTopics.filter(x => x.id !== topicId);
	}


	checkErrors() {
		return (this.sessionForm.controls.place.hasError('required')
			|| this.sessionForm.controls.sessionDate.hasError('required') || this.sessionForm.controls.sessionDate.hasError('invalidDate')
			|| this.sessionForm.controls.description.hasError('required') || this.sessionForm.controls.price.hasError('required') || this.timeError
			|| this.selectedTopics.length === 0);
	}

	createSession() {


		if (!this.checkErrors() && this.sessionForm.dirty && this.sessionForm.touched) {

			this.tutoringSession.place = this.sessionForm.value.place;
			this.tutoringSession.description = this.sessionForm.value.description;
			this.tutoringSession.price = this.sessionForm.value.price;



			this.tutoringSession.startTime = new Date(this.sessionForm.value.sessionDate + ' ' + this.sessionForm.value.startTime);
			this.tutoringSession.endTime = new Date(this.sessionForm.value.sessionDate + ' ' + this.sessionForm.value.endTime);

			console.log(this.tutoringSession.startTime);


			// tslint:disable-next-line: prefer-for-of
			for (let i = 0; i < this.selectedTopics.length; ++i) {
				this.tutoringSession.topics.push(this.selectedTopics[i].id);
			}
			this.sessionsCreated.push(this.tutoringSession);

			console.log(this.sessionsCreated);

			this.tutoringSession = {
				place: "",
				startTime: null,
				endTime: null,
				description: "",
				price: null,
				topics: []
			} as TutoringSessionRequest;

			this.selectedTopics = [];
			this.timeError = false;
			this.sessionForm = this.createFormGroup();
		}
	}

	deleteSession(index) {
		this.sessionsCreated.splice(index, 1);
	}

	publishTutoring() {
		this.tutoringService.setSessions(this.sessionsCreated);
		this.tutoringService.publishTutoring();
		this._router.navigate(["/home"]);
	}
}
