import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoginRoutingModule } from "./login-routing.module";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
	imports: [CommonModule, LoginRoutingModule, ReactiveFormsModule],
	declarations: [LoginPageComponent, LoginComponent, RegisterComponent]
})
export class LoginModule {}
