import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionComponent } from './pages/subscription/subscription.component';
import { FormsModule } from '@angular/forms';
import { SuscriptionService } from 'src/app/core';
import { SubscriptionRoutingModule } from './subscription-routing.module';



@NgModule({
  declarations: [ SubscriptionComponent],
  imports: [
	CommonModule,
	FormsModule,
	SubscriptionRoutingModule
  ],
  providers:[
	  SuscriptionService
  ]
})
export class SubscriptionModule { }
