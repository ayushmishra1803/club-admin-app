import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class OrderdetailsService {
  orderId: string;

  constructor(private router: Router) {}
  setOrderId(id: string) {
    this.orderId = id;
    console.log(id);
    this.router.navigate(["/home/tabs/order/ongoingorder-detail"]);
  }
  getOrderId() {
    return this.orderId;
  }
}
