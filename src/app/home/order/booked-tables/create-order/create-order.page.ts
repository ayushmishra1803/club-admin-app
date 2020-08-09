import { NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderdetailsService } from "./../../service/order/orderdetails.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { create } from "./interface/create";
import { createorderApi } from "./interface/create";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-create-order",
  templateUrl: "./create-order.page.html",
  styleUrls: ["./create-order.page.scss"],
})
export class CreateOrderPage implements OnInit {
  constructor(
    private http: HttpClient,
    private service: OrderdetailsService,
    private router: Router,
    private nav:NavController
  ) {}
  quantity: number;
  name: string;
  items: create[] = [];
  tableId: string;
  ngOnInit() {
    this.tableId = this.service.getcreateorderId();
  }
  Add(f:NgForm) {
    console.log(this.name);

    console.log(this.quantity);
    this.items.push({ item: this.name, quantity: this.quantity });
    console.log(this.items);
    f.reset();
  }
  submit() {
    let data: createorderApi;
    data = {
      items: [...this.items],
    };
    console.log(data);

    let token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTk3MDc2NTY0LCJqdGkiOiJkZGY0YjlmNjY4ZjU0N2M2Yjk4ZDIxMDc1NGM4Njk2ZCIsInV1aWQiOiIwYTc2MzI2ZC1jZWU4LTRjMzAtYmUyYy03NTgzZDE3ZTg5OGQifQ.HkR_V6xa7jptwSqvXmqVn70vv3IgQ2qHyDPyp5v18a8";
     let header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    console.log(this.items);
    this.http
      .post(
        `https://4obg8v558d.execute-api.ap-south-1.amazonaws.com/dev/order/createorder/${this.tableId}`,
        data,
        { headers: header }
      )
      .subscribe((re) => {
        console.log(re);
        this.nav.navigateForward(["/home/tabs/order"]);
        this.service.setTabMode("On-Going");
      });
  }
  delete(item) {
    this.items.splice(this.items.indexOf(item),1);
  }
}
