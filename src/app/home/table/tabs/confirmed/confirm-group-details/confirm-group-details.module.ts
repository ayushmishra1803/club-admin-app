import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmGroupDetailsPageRoutingModule } from './confirm-group-details-routing.module';

import { ConfirmGroupDetailsPage } from './confirm-group-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmGroupDetailsPageRoutingModule
  ],
  declarations: [ConfirmGroupDetailsPage]
})
export class ConfirmGroupDetailsPageModule {}
