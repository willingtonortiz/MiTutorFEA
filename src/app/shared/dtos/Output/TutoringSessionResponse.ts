export interface TutoringSessionResponse {
	id: number;
	place: string;
	startTime: Date;
	endTime: Date;
	studentCount: number;
	description: string;
	price: string;
	topicsName: Array<string>;
}
