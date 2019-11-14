import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ViewTutoringRoutingModule } from './view-tutoring-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


// Pages
import { TutoringOfferComponent } from './pages/index';
import { TutoringSessionComponent } from './pages/index';

// Components


// Services
import { ViewTutoringService} from './services/index';


@NgModule({
	imports: [
		HttpClientModule,
		ViewTutoringRoutingModule,
		FormsModule,
		CommonModule,

	],
	declarations: [

		TutoringOfferComponent,
		TutoringSessionComponent
	],
	exports: [],
	providers: [ ViewTutoringService]
})

export class ViewTutoringModule {}
