import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtpPage } from './otp.page';

const routes: Routes = [
  {
    path: '',
    component: OtpPage
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./validate-otp/validate-otp.module').then( m => m.ValidateOtpPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtpPageRoutingModule {}
