import {TutoringSessionRequest} from './TutoringSessionRequest';

export interface TutoringOfferRequest {
	capacity?: number;
	description?: string;
	courseId?: number;
	tutorId?: number;
	universityId?: number;
	tutoringSessions?: Array<TutoringSessionRequest>;
}
