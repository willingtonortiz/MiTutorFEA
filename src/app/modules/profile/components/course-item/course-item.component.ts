import { Component, OnInit, Input } from "@angular/core";
import { Course } from "src/app/shared/models";

@Component({
	selector: "app-course-item",
	templateUrl: "./course-item.component.html",
	styleUrls: ["./course-item.component.scss"]
})
export class CourseItemComponent implements OnInit {
	@Input("course") course: Course;

	constructor() {}

	ngOnInit() {
		// this.course = { name: "ARQUITECTURA DE COMPUTADORAS" };
	}

	public editCourse() {
		console.log("Editar este curso");
	}

	public deleteCourse() {
		console.log("Eliminar este curso");
	}
}
