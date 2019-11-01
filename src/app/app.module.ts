import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SubscriptionModule } from "./modules/subscription/subscription.module";
import { RegisterModule } from "./modules/register/register.module";

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SubscriptionModule,
		RegisterModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
