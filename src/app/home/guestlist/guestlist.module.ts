import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuestlistPageRoutingModule } from './guestlist-routing.module';

import { GuestlistPage } from './guestlist.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, GuestlistPageRoutingModule],
  declarations: [GuestlistPage],
  providers: [DatePipe],
})
export class GuestlistPageModule {}
