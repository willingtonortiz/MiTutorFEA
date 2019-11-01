import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { ProfileRoutingModule } from "./profile-routing.module";

import { ProfileContainerComponent } from "./pages/index";

import {
	CoursesContainerComponent,
	CourseListComponent,
	CourseItemComponent,
	ProfileModalContainerComponent
} from "./components/index";

import { AddCourseModalComponent } from "./modals/index";
import { CourseService } from "src/app/core";
import { CourseListService, ModalManagerService } from "./services/index";

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		ReactiveFormsModule,
		ProfileRoutingModule
	],
	declarations: [
		ProfileContainerComponent,
		CoursesContainerComponent,
		CourseListComponent,
		CourseItemComponent,
		AddCourseModalComponent,
		ProfileModalContainerComponent
	],
	exports: [],
	providers: [CourseService, CourseListService, ModalManagerService]
})
export class ProfileModule {}
