import { FeedbackComponent } from './component/feedback/feedback.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateOrderPageRoutingModule } from './update-order-routing.module';

import { UpdateOrderPage } from './update-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateOrderPageRoutingModule
  ],
  declarations: [UpdateOrderPage],
  entryComponents:[FeedbackComponent]
})
export class UpdateOrderPageModule {}
