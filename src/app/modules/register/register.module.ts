import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [RegisterComponent],
  imports: [
	CommonModule,
	FormsModule,
	HttpClientModule
  ]
})
export class RegisterModule { }
