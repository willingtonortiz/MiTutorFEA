import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutoringOfferComponent} from './pages/index';
import { TutoringSessionComponent } from './pages/index';


const routes: Routes = [
	{
		path: '',
		component: TutoringOfferComponent
	},
	{
		path: 'tutoring-session/:sessionid',
		component: TutoringSessionComponent
	},

];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ViewTutoringRoutingModule {}

