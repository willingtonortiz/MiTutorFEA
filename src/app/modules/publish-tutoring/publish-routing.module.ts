import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublishOfferComponent } from './pages/index';


const routes: Routes = [
	{
		path: '',
		component: PublishOfferComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PublishRoutingModule {}

