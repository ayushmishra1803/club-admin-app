import { OrderdetailsService } from "./../../service/order/orderdetails.service";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { onGoingDetails } from './Interface/onGoingDetails';

@Component({
  selector: "app-ongoingorder-detail",
  templateUrl: "./ongoingorder-detail.page.html",
  styleUrls: ["./ongoingorder-detail.page.scss"],
})
export class OngoingorderDetailPage implements OnInit {
  constructor(
    private http: HttpClient,
    private router: Router,
    private order: OrderdetailsService
  ) {}
  orderId: string;
  onGoingDetails:onGoingDetails[];
  ngOnInit() {
    let token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTk2ODkwNDg5LCJqdGkiOiJkMjhlNTA4YzBmOTI0MWNmODc5ZDJlYjlkZWNhMzJjYSIsInV1aWQiOiIwNTljMThhMi02OWY3LTRlYTAtOTdiZS1kZDEwYTBmYmFiMjEifQ.oqtWfXD91RZm5bqP1Oeq4dNXj7rM9Yseh_ris0-2zkE";
    let header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    this.orderId = this.order.getOrderId();
    this.http
      .get<{ status: boolean, message: string; data: onGoingDetails[] }>(
        `https://4obg8v558d.execute-api.ap-south-1.amazonaws.com/dev/orderdetails/${this.orderId}`,
        { headers: header }
      )
      .subscribe((re) => {
        this.onGoingDetails=re.data;
        console.log(this.onGoingDetails);
      });
  }
  generateBill() {
    let token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTk2ODkwNDg5LCJqdGkiOiJkMjhlNTA4YzBmOTI0MWNmODc5ZDJlYjlkZWNhMzJjYSIsInV1aWQiOiIwNTljMThhMi02OWY3LTRlYTAtOTdiZS1kZDEwYTBmYmFiMjEifQ.oqtWfXD91RZm5bqP1Oeq4dNXj7rM9Yseh_ris0-2zkE";

    let header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    const data = {};
    this.http
      .put(
        `https://4obg8v558d.execute-api.ap-south-1.amazonaws.com/dev/order/complete/${this.orderId}`,
        data,
        { headers: header }
      )
      .subscribe((re) => {
        this.router.navigate(["/home/tabs/order"]);
        console.log(re);
      });
  }
}
