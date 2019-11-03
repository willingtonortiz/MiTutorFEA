import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HomeRoutingModule } from "./home-routing.module";
import {
	TutoringOfferService,
	CourseService,
	TutorService
} from "src/app/core";

// Pages
import { HomePageComponent } from "./pages";

// Components
import { HttpClientModule } from "@angular/common/http";
import {
	TutorInfoComponent,
	TutorInfoGroupComponent,
	TutoringOfferInfoComponent,
	TutoringOfferInfoGroupComponent
} from "./components";

// services
import { SearchTutoringOffersAnsTutorsService } from "./services";
import { TutorTutoringsComponent } from "./components/tutor-tutorings/tutor-tutorings.component";
import { TutorAvailabilityComponent } from "./components/tutor-availability/tutor-availability.component";
import { HomeSideBarComponent } from "./components/home-side-bar/home-side-bar.component";
import { StudentSideBarComponent } from "./components/student-side-bar/student-side-bar.component";
import { TutorSideBarComponent } from "./components/tutor-side-bar/tutor-side-bar.component";
import { ColorService } from "src/app/core/services";

@NgModule({
	imports: [CommonModule, HomeRoutingModule, HttpClientModule, FormsModule],
	declarations: [
		HomePageComponent,
		TutorInfoComponent,
		TutorInfoGroupComponent,
		TutoringOfferInfoComponent,
		TutoringOfferInfoGroupComponent,
		TutorTutoringsComponent,
		TutorAvailabilityComponent,
		HomeSideBarComponent,
		StudentSideBarComponent,
		TutorSideBarComponent
	],
	providers: [
		TutoringOfferService,
		CourseService,
		TutorService,
		SearchTutoringOffersAnsTutorsService,
		// ColorService
	]
})
export class HomeModule {}
