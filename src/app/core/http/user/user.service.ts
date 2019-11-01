import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserRegister } from 'src/app/shared/dtos/Input/UserRegister';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
	  private httpClient:HttpClient
  ) { }

  public async createUser(userRegister:UserRegister):Promise<any>{
	const httpOptions = {
		headers: new HttpHeaders({
			"Content-Type": "application/json"
		})

	};

	const url = `${environment.apiUrl}/register`;


	return this.httpClient.post(url,userRegister,httpOptions);
  }
}
