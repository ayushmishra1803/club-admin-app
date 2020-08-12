import { AuthService } from './../../../../../service/auth/auth.service';

import { itemdetails } from "./../Interface/onGoingDetails";
import { NgForm } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { OrderdetailsService } from "./../../../service/order/orderdetails.service";
import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-update-order",
  templateUrl: "./update-order.page.html",
  styleUrls: ["./update-order.page.scss"],
})
export class UpdateOrderPage implements OnInit {
  constructor(
    private service: OrderdetailsService,
    private router: Router,
    private http: HttpClient,
    private model: ModalController,
    private auth:AuthService
  ) {}
  orderId: string;
  isAdd: boolean;
  completed: boolean;
  orderdetails: itemdetails[];
  ngOnInit() {
    this.isAdd = this.service.getIsAdd();
    if (this.isAdd == false) {
      this.orderdetails = this.service.getRemoveDetails();
      console.log(this.orderdetails);
    }
    this.orderId = this.service.getOrderId();
  }
  onsubmit(f: NgForm) {
    const data = {
      item: f.value.iteam,
      quantity: f.value.Quantity,
    };
    const token =this.auth.getToken()
      let header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    console.log(f.value.iteam, f.value.Quantity);
    this.http
      .put(
        `https://4obg8v558d.execute-api.ap-south-1.amazonaws.com/dev/orderdetails/${this.orderId}`,
        data,
        {
          headers: header,
        }
      )
      .subscribe((re) => {
        console.log(re);
        this.router.navigate(["/home/tabs/order/ongoingorder-detail"]);
      });
  }
  remove(f: NgForm) {
    let token =this.auth.getToken();
     const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    const data = {
      item: f.value.remove.trim(),
      quantity: f.value.quantity,
    };
    console.log(data);

    this.http
      .put(
        `https://4obg8v558d.execute-api.ap-south-1.amazonaws.com/dev/removeorder/${this.orderId}`,
        data,
        { headers: header }
      )
      .subscribe((re) => {
        console.log(re);
        this.router.navigate(["/home/tabs/order/ongoingorder-detail"]);
      });
    console.log(f.value.remove, f.value.quantity);
  }
}
