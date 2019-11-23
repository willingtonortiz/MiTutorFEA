import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TutoringOfferResponse } from "src/app/shared/dtos/Output/TutoringOfferResponse";
import { environment } from "src/environments/environment";
import { TutoringSessionUser } from 'src/app/shared/dtos/Output/TutoringSessionUser';
import { University } from 'src/app/shared/models/University/University';

@Injectable({
	providedIn: "root"
})
export class ViewTutoringService {
	tutoringOffer: TutoringOfferResponse;

	constructor(private httpClient: HttpClient) {}

	private async checkData(tutoringId: number) {
		if (
			this.tutoringOffer == null ||
			this.tutoringOffer.tutoringOfferId !== tutoringId
		) {
			this.tutoringOffer = await this.httpClient
				.get<TutoringOfferResponse>(
					`${environment.apiUrl}/tutoringoffers/searchById/${tutoringId}`
				)
				.toPromise<TutoringOfferResponse>();
		}
	}

	async getTutoringOffer(tutoringId: number) {
		await this.checkData(tutoringId);
		return this.tutoringOffer;
	}

	async getTutoringSession(tutoringId: number, sessionId: number) {
		await this.checkData(tutoringId);


		for (
			let i = 0;
			i < this.tutoringOffer.tutoringSessionResponses.length;
			++i
		) {
			if (
				this.tutoringOffer.tutoringSessionResponses[i].id === sessionId
			) {
				return this.tutoringOffer.tutoringSessionResponses[i];
			}
		}
	}


	async getTutor(tutoringId: number) {
		await this.checkData(tutoringId);
		return this.tutoringOffer.idTutor;
	}

	async reserveTutoringSession(idSession, idUser) {
		let CreateTutoringSession = {
			"tutoring_session_id": idSession,
			"student_id": idUser
		};
		const uri = `${environment.apiUrl}/TutoringSessionStudent`;
		await this.httpClient
			.post<any>(uri, CreateTutoringSession).toPromise<any>();
	}

	public  getAllTutoringSessionByUser(id:number): Promise<Array<TutoringSessionUser>> {
		const url = `${environment.apiUrl}/TutoringSessionStudent/user/${id}`
		return this.httpClient.
				get<Array<TutoringSessionUser>>(url)
				.toPromise<Array<TutoringSessionUser>>();
	}


}
