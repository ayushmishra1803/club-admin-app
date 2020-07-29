import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage
  },
  {
    path: 'group-details',
    loadChildren: () => import('./request/group-details/group-details.module').then( m => m.GroupDetailsPageModule)
  },
  {
    path: 'confirm-group-details',
    loadChildren: () => import('./confirmed/confirm-group-details/confirm-group-details.module').then( m => m.ConfirmGroupDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
