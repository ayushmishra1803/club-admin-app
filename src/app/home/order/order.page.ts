import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-order",
  templateUrl: "./order.page.html",
  styleUrls: ["./order.page.scss"],
})
export class OrderPage implements OnInit {
  constructor(private http: HttpClient) {}

  Orders:string;

  ngOnInit() {
    this.Orders = "Tables";
    let token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTk2ODkwNDg5LCJqdGkiOiJkMjhlNTA4YzBmOTI0MWNmODc5ZDJlYjlkZWNhMzJjYSIsInV1aWQiOiIwNTljMThhMi02OWY3LTRlYTAtOTdiZS1kZDEwYTBmYmFiMjEifQ.oqtWfXD91RZm5bqP1Oeq4dNXj7rM9Yseh_ris0-2zkE";
    let header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    let data = {
      date: "2020-08-10",
      day: "Monday",
    };
    this.http
      .post(
        "https://4obg8v558d.execute-api.ap-south-1.amazonaws.com/dev/order/ongoing",
        data,
        { headers: header }
      )
      .subscribe((re) => {
        console.log(re);
      });
    this.http
      .post(
        "https://4obg8v558d.execute-api.ap-south-1.amazonaws.com/dev/order/past",
        data,
        { headers: header }
      )
      .subscribe((re) => {
        console.log(re);
      });
  }
}
//https://4obg8v558d.execute-api.ap-south-1.amazonaws.com/dev/order/past
