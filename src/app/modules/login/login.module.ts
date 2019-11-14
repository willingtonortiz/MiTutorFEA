import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoginRoutingModule } from "./login-routing.module";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@NgModule({
	imports: [
		CommonModule,
		LoginRoutingModule,
		ReactiveFormsModule,
		RouterModule
	],
	declarations: [LoginPageComponent, LoginComponent, RegisterComponent]
})
export class LoginModule {}
