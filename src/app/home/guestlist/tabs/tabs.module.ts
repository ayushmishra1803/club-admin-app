import { GuestlistConfirmedComponent } from './guestlist-confirmed/guestlist-confirmed.component';
import { GuestListRequestComponent } from './guest-list-request/guest-list-request.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule
  ],
  declarations: [TabsPage,GuestListRequestComponent,GuestlistConfirmedComponent]
})
export class TabsPageModule {}
