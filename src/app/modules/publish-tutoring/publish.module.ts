import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PublishRoutingModule } from './publish-routing.module';


// Pages
import { PublishOfferComponent } from './pages/index';

// Components


// Services
import { PublishTutoringService} from './services/index';

@NgModule({
	imports: [
		HttpClientModule,
		PublishRoutingModule
	],
	declarations: [

		PublishOfferComponent
	],
	exports: [],
	providers: [ PublishTutoringService]
})

export class PublishModule {}
