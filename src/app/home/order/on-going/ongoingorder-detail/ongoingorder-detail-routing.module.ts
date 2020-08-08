import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OngoingorderDetailPage } from './ongoingorder-detail.page';

const routes: Routes = [
  {
    path: '',
    component: OngoingorderDetailPage
  },
  {
    path: 'update-order',
    loadChildren: () => import('./update-order/update-order.module').then( m => m.UpdateOrderPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OngoingorderDetailPageRoutingModule {}
