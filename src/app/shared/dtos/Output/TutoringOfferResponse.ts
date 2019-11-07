import { TutoringSessionResponse } from './TutoringSessionResponse';

export interface TutoringOfferResponse {

	tutoringOfferId: number;
	startTime: Date;
	endTime: Date;
	capacity: number;
	description: string;
	tutor: string;
	course: string;
	universityName: string;
	topicsName: Array<string>;
	tutoringSessionResponses: Array<TutoringSessionResponse>;
}
