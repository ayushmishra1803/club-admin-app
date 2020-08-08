import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { OrderdetailsService } from "./../../../service/order/orderdetails.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-update-order",
  templateUrl: "./update-order.page.html",
  styleUrls: ["./update-order.page.scss"],
})
export class UpdateOrderPage implements OnInit {
  constructor(
    private service: OrderdetailsService,
    private router: Router,
    private http: HttpClient
  ) {}
  orderId: string;
  ngOnInit() {
    this.orderId=this.service.getOrderId();
    
  }
}
