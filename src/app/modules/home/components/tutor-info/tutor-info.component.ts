import { Component, OnInit, Input } from "@angular/core";
import { TutorInfo } from "src/app/shared/dtos/Input";

@Component({
	selector: "app-tutor-info",
	templateUrl: "./tutor-info.component.html",
	styleUrls: ["./tutor-info.component.scss"]
})
export class TutorInfoComponent implements OnInit {
	@Input("tutor") tutor: TutorInfo;

	constructor() {}

	ngOnInit() {}
}
