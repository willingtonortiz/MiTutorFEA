export interface TutoringSessionRequest {
	place?: string;
	startTime?: Date;
	endTime?: Date;
	description?: string;
	price?: number;
	topics?: Array<number>;
}
