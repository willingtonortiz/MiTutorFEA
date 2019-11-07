import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SubscriptionComponent } from "./modules/subscription/pages/subscription/subscription.component";
import { RegisterComponent } from "./modules/register/pages/register/register.component";

const routes: Routes = [
	{
		path: "",
		redirectTo: "login",
		pathMatch: "full"
	},
	{
		path: "home",
		loadChildren: "./modules/home/home.module#HomeModule"
	},
	{
		path: "profile",
		loadChildren: "./modules/profile/profile.module#ProfileModule"
	},
	{
		path: "subscription",
		loadChildren: "./modules/subscription/subscription.module#SubscriptionModule"
	},
	{
		path: "register",
		loadChildren:"./modules/register/register.module#RegisterModule"
	},
	{
		path: "login",
		loadChildren: "./modules/login/login.module#LoginModule"
	},
	{
		path: 'publish-tutoring/:id',
		loadChildren: './modules/publish-tutoring/publish.module#PublishModule'
	},
	{
		path: 'view-tutoring/:id',
		loadChildren: './modules/view-tutoring/view-tutoring.module#ViewTutoringModule'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
