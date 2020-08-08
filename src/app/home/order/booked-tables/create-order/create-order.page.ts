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
  constructor(private http: HttpClient, private service: OrderdetailsService) {}
  quantity: number;
  name: string;
  items: create[] = [];
  tableId: string;
  ngOnInit() {
    this.tableId = this.service.getcreateorderId();
  }
  Add() {
    console.log(this.name);

    console.log(this.quantity);
    this.items.push({ item: this.name, quantity: this.quantity });
    console.log(this.items);
  }
  submit() {
    let data: createorderApi;
    data = {
      items: [...this.items],
    };
    console.log(data);

    let token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTk2OTg3Nzg0LCJqdGkiOiJhMzQ1MmU4N2QwNzU0ZjljOWRjODE2MTJlZWQ5ZjRjYSIsInV1aWQiOiIwYTc2MzI2ZC1jZWU4LTRjMzAtYmUyYy03NTgzZDE3ZTg5OGQifQ.qzYBwURN5Gee9GhhRffR2PHjvbCoXtVd7jV7DsoPd4Q";
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
      });
  }
}
