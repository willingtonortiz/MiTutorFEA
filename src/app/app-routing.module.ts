import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
	{
		path: "",
		redirectTo: "profile",
		pathMatch: "full"
	},
	{
		path: "home",
		loadChildren: "./modules/home/home.module#HomeModule"
	},
	{
		path: "profile",
		loadChildren: "./modules/profile/profile.module#ProfileModule"
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
