import { NgForm } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";
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
  completed:boolean
  ngOnInit() {
   
    this.orderId = this.service.getOrderId();
  }
  onsubmit(f: NgForm) {
    const data = {
      item: f.value.iteam,
      quantity: f.value.Quantity,
    };
    let token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTk2OTg3Nzg0LCJqdGkiOiJhMzQ1MmU4N2QwNzU0ZjljOWRjODE2MTJlZWQ5ZjRjYSIsInV1aWQiOiIwYTc2MzI2ZC1jZWU4LTRjMzAtYmUyYy03NTgzZDE3ZTg5OGQifQ.qzYBwURN5Gee9GhhRffR2PHjvbCoXtVd7jV7DsoPd4Q";
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
      });
  }
}
