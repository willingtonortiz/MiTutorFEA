import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { HomeRoutingModule } from "./home-routing.module";
import { TutoringOfferService, CourseService } from "src/app/core";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
	declarations: [HomePageComponent],
	imports: [CommonModule, HomeRoutingModule, HttpClientModule, FormsModule],
	providers: [TutoringOfferService, CourseService]
})
export class HomeModule {}
