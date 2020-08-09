import { OrderFeedbackComponent } from './order-feedback/order-feedback.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OngoingorderDetailPageRoutingModule } from './ongoingorder-detail-routing.module';

import { OngoingorderDetailPage } from './ongoingorder-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OngoingorderDetailPageRoutingModule,
   FormsModule
  ],
  declarations: [OngoingorderDetailPage,OrderFeedbackComponent],
 entryComponents:[OrderFeedbackComponent]
})
export class OngoingorderDetailPageModule {}
