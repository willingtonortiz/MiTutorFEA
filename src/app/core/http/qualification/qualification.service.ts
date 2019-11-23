import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Qualifications } from 'src/app/shared/dtos/Output/Qualification';

@Injectable({
  providedIn: 'root'
})
export class QualificationService {

  constructor(private httpClient:HttpClient) { }


	getQualificationsByTutor(id: number){
		const uri = `${environment.apiUrl}/qualifications/tutor/${id}`
		return this.httpClient.
				get<Array<Qualifications>>(uri)
				.toPromise<Array<Qualifications>>();
	}


}
