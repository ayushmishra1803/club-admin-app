import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderPage } from './order.page';

const routes: Routes = [
  {
    path: '',
    component: OrderPage
  },
  {
    path: 'ongoingorder-detail',
    loadChildren: () => import('./on-going/ongoingorder-detail/ongoingorder-detail.module').then( m => m.OngoingorderDetailPageModule)
  },
  {
    path: 'create-order',
    loadChildren: () => import('./booked-tables/create-order/create-order.module').then( m => m.CreateOrderPageModule)
  },
  {
    path: 'group-details',
    loadChildren: () => import('./group-details/group-details.module').then( m => m.GroupDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderPageRoutingModule {}
