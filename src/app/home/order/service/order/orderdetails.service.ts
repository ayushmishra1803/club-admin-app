import { itemdetails } from './../../on-going/ongoingorder-detail/Interface/onGoingDetails';
import { order } from './../../on-going/interface/onGoing';
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class OrderdetailsService {
  orderId: string;
  createOrderID: string;
  completed: boolean;
  tabMode: string = "Tables";
  isAdd: boolean;
  RemoverOrderDetails: itemdetails[];
  constructor(private router: Router) {}
  setOrderId(id: string, completed: boolean) {
    this.completed = completed;
    this.orderId = id;
    console.log(id);
  }
  getOrderId() {
    return this.orderId;
  }
  getiscompleted() {
    return this.completed;
  }
  setcreateorderId(id: string) {
    this.createOrderID = id;
    console.log(id);
  }
  getcreateorderId() {
    console.log(this.createOrderID);

    return this.createOrderID;
  }
  setTabMode(Mode: string) {
    this.tabMode = Mode;
  }
  getTabMode() {
    return this.tabMode;
  }
  seIsAdd(add: boolean, order?: itemdetails[]) {
    this.isAdd = add;
    this.RemoverOrderDetails=order
  }
  getIsAdd() {
    return this.isAdd;
  }
  getRemoveDetails(){
    return [...this.RemoverOrderDetails]
  }
}
