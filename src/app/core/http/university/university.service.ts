import { Injectable, ɵConsole } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { University } from 'src/app/shared/models/University/University';

@Injectable({
	providedIn: "root"
})
export class UniversityService {
	constructor(

		private httpClient:HttpClient
	) {}


	 public async findAll():Promise<Array<University>>{
		const url = `${environment.apiUrl}/universities`;
		return  this.httpClient.get<Array<University>>(url).pipe( map((universities:Array<University>)=>{

			return universities;
		})
		).toPromise<Array<University>>();
	}
}
