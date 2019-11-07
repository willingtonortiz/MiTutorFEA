import { Component, OnInit } from '@angular/core';
import { PublishTutoringService } from '../../services/index';
import { TutoringSessionRequest } from 'src/app/shared/dtos/Input/TutoringSessionRequest';
import { Topic } from 'src/app/shared/models/topic/Topic';
import { TopicService, CourseService } from 'src/app/core';

@Component({
	selector: 'app-publish-session',
	templateUrl: './publish-session.component.html',
	styleUrls: ['./publish-session.component.scss']
})
export class PublishSessionComponent implements OnInit {

	public tutoringSession = {
		place: '',
		startTime: null,
		endTime: null,
		description: '',
		price: null,
		topics: [],
	} as TutoringSessionRequest;

	public avaliableTopics: Array<Topic> = [];
	public selectedTopics: Array<Topic> = [];
	public selectedTopic: Topic;
	public errors: Array<string> = [];
	public sessionsCreated: Array<TutoringSessionRequest> = [];

	constructor(private courseService: CourseService, private tutoringService: PublishTutoringService) {
	}

	async ngOnInit() {
		console.log('Session');
		this.avaliableTopics = await this.courseService.findTopics(this.tutoringService.offerCourse());
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
		console.log(this.selectedTopic);

		if (this.selectedTopic !== 0 && !this.checkRepeatedTopics(this.selectedTopic.id)) {
			this.selectedTopics.push(this.selectedTopic);
		}
	}

	deleteTopic(topicId: number) {
		this.selectedTopics = this.selectedTopics.filter(x => x.id !== topicId);
	}

	createSession() {
		// tslint:disable-next-line: prefer-for-of
		for (let i = 0; i < this.selectedTopics.length; ++i) {
			this.tutoringSession.topics.push(this.selectedTopics[i].id);
		}
		this.sessionsCreated.push(this.tutoringSession);


		this.tutoringSession = {
			place: '',
			startTime: null,
			endTime: null,
			description: '',
			price: null,
			topics: [],
		} as TutoringSessionRequest;

		this.selectedTopics = [];
		this.selectedTopic = null;
		this.errors = [];

	}

	deleteSession(index) {
		this.sessionsCreated.splice(index, 1);
	}

	publishTutoring() {
		this.tutoringService.setSessions(this.sessionsCreated);
		this.tutoringService.publishTutoring();
	}



}
