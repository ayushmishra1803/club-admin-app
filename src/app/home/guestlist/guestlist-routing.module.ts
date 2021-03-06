import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuestlistPage } from './guestlist.page';

const routes: Routes = [
  {
    path: '',
    component: GuestlistPage
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuestlistPageRoutingModule {}
