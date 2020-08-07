import { CompletedComponent } from './completed/completed.component';
import { OnGoingComponent } from './on-going/on-going.component';
import { BookedTablesComponent } from './booked-tables/booked-tables.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { OrderPageRoutingModule } from "./order-routing.module";

import { OrderPage } from "./order.page";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, OrderPageRoutingModule],
  declarations: [OrderPage,BookedTablesComponent,OnGoingComponent,CompletedComponent],
})
export class OrderPageModule {}
