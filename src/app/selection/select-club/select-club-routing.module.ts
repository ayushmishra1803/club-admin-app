import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectClubPage } from './select-club.page';

const routes: Routes = [
  {
    path: '',
    component: SelectClubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectClubPageRoutingModule {}
