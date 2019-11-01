import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SubscriptionComponent } from './modules/subscription/pages/subscription/subscription.component';
import { RegisterComponent } from './modules/register/pages/register/register.component';

const routes: Routes = [
	{
		path: "",
		loadChildren: "./modules/home/home.module#HomeModule"
	},
	{
		path:"subscription",
		component:SubscriptionComponent
	},
	{
		path:"register",
		component:RegisterComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
