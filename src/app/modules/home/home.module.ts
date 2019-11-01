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

@NgModule({
	imports: [CommonModule, HomeRoutingModule, HttpClientModule, FormsModule],
	declarations: [
		HomePageComponent,
		TutorInfoComponent,
		TutorInfoGroupComponent,
		TutoringOfferInfoComponent,
		TutoringOfferInfoGroupComponent
	],
	providers: [
		TutoringOfferService,
		CourseService,
		TutorService,
		SearchTutoringOffersAnsTutorsService
	]
})
export class HomeModule {}
