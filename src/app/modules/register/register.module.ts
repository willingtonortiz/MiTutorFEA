import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './pages';
import { FormsModule } from '@angular/forms';
import { RegisterRoutingModule } from './register-routing.module';



@NgModule({
  declarations: [RegisterComponent],
  imports: [
	CommonModule,
	FormsModule,

	RegisterRoutingModule
  ]
})
export class RegisterModule { }
