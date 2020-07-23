import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectClubPageRoutingModule } from './select-club-routing.module';

import { SelectClubPage } from './select-club.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectClubPageRoutingModule
  ],
  declarations: [SelectClubPage]
})
export class SelectClubPageModule {}
