import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "src/app/core";

@Component({
	selector: "app-home-side-bar",
	templateUrl: "./home-side-bar.component.html",
	styleUrls: ["./home-side-bar.component.scss"]
})
export class HomeSideBarComponent implements OnInit {
	public role: string;

	constructor(private _authenticationService: AuthenticationService) {
		this.role = this._authenticationService.userValue.role;
		// this.role = "TUTOR";
	}

	ngOnInit() {}
}
