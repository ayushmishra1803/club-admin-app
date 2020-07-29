import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmGroupDetailsPage } from './confirm-group-details.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmGroupDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmGroupDetailsPageRoutingModule {}
