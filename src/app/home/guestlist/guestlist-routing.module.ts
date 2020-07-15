import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuestlistPage } from './guestlist.page';

const routes: Routes = [
  {
    path: '',
    component: GuestlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuestlistPageRoutingModule {}
