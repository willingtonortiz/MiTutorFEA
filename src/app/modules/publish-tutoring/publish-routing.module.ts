import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublishOfferComponent } from './pages/index';
import { PublishSessionComponent } from './pages/index';


const routes: Routes = [
	{
		path: '',
		component: PublishOfferComponent
	},
	{
		path: 'publish-session',
		component: PublishSessionComponent
	},

];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PublishRoutingModule {}

