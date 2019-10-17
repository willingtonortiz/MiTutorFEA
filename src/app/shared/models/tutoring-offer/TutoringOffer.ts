import { Tutor } from "../tutor/Tutor";

export interface TutoringOffer {
	tutoringOfferId: number;
	startTime: Date;
	endTime: Date;
	capacity: number;
	description: string;
}
