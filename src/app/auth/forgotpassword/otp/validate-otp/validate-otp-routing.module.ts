import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidateOtpPage } from './validate-otp.page';

const routes: Routes = [
  {
    path: '',
    component: ValidateOtpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidateOtpPageRoutingModule {}
