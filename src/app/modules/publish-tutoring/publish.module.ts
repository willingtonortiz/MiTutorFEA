import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PublishRoutingModule } from './publish-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Pages
import { PublishOfferComponent } from './pages/index';
import { PublishSessionComponent } from './pages/index';

// Components


// Services
import { PublishTutoringService} from './services/index';


@NgModule({
	imports: [
		HttpClientModule,
		PublishRoutingModule,
		FormsModule,
		CommonModule,
		ReactiveFormsModule,
	],
	declarations: [

		PublishOfferComponent,
		PublishSessionComponent
	],
	exports: [],
	providers: [ PublishTutoringService]
})

export class PublishModule {}
