import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidateOtpPageRoutingModule } from './validate-otp-routing.module';

import { ValidateOtpPage } from './validate-otp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidateOtpPageRoutingModule
  ],
  declarations: [ValidateOtpPage]
})
export class ValidateOtpPageModule {}
