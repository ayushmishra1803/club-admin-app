import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateOrderPage } from './update-order.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateOrderPageRoutingModule {}
