import { TutoringSessionResponse } from './TutoringSessionResponse';

export interface TutoringSessionUser {

	"id": any,
	"place": string,
	"startTime": Date,
	"endTime": Date,
	"studentCount": number,
	"description": string	,
	"price": number,
	"topicsName": []
}
