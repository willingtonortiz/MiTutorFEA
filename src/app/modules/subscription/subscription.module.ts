import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionComponent } from './pages/subscription/subscription.component';
import { FormsModule } from '@angular/forms';
import { SuscriptionService } from 'src/app/core';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ SubscriptionComponent],
  imports: [
	CommonModule,
	FormsModule,
	HttpClientModule
  ],
  providers:[
	  SuscriptionService
  ]
})
export class SubscriptionModule { }
