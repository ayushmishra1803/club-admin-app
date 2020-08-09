import { NavController } from '@ionic/angular';
import { OrderdetailsService } from "./../../service/order/orderdetails.service";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { onGoingDetails, itemdetails } from "./Interface/onGoingDetails";

@Component({
  selector: "app-ongoingorder-detail",
  templateUrl: "./ongoingorder-detail.page.html",
  styleUrls: ["./ongoingorder-detail.page.scss"],
})
export class OngoingorderDetailPage implements OnInit {
  constructor(
    private http: HttpClient,
    private router: Router,
    private order: OrderdetailsService,
    private nav: NavController
  ) {}
  orderId: string;
  completed: boolean;
  orderdetails: itemdetails[] = [];
  onGoingDetails: onGoingDetails;
  getdata() {
      let token =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTk3MDc2NTY0LCJqdGkiOiJkZGY0YjlmNjY4ZjU0N2M2Yjk4ZDIxMDc1NGM4Njk2ZCIsInV1aWQiOiIwYTc2MzI2ZC1jZWU4LTRjMzAtYmUyYy03NTgzZDE3ZTg5OGQifQ.HkR_V6xa7jptwSqvXmqVn70vv3IgQ2qHyDPyp5v18a8";
    let header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    this.orderId = this.order.getOrderId();
    this.http
      .get<{ status: boolean; message: string; data: onGoingDetails }>(
        `https://4obg8v558d.execute-api.ap-south-1.amazonaws.com/dev/orderdetails/${this.orderId}`,
        { headers: header }
      )
      .subscribe((re) => {
        this.onGoingDetails = re.data;
        this.orderdetails = re.data.items;
        console.log(this.onGoingDetails);
      });
    this.completed = this.order.getiscompleted();
    this.router.navigate(["/home/tabs/order/ongoingorder-detail"]);
  }
  ngOnInit() {
    this.getdata();
  }
  ionViewDidEnter() {
    this.getdata();
  }
  generateBill() {
        let token =
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTk3MDc2NTY0LCJqdGkiOiJkZGY0YjlmNjY4ZjU0N2M2Yjk4ZDIxMDc1NGM4Njk2ZCIsInV1aWQiOiIwYTc2MzI2ZC1jZWU4LTRjMzAtYmUyYy03NTgzZDE3ZTg5OGQifQ.HkR_V6xa7jptwSqvXmqVn70vv3IgQ2qHyDPyp5v18a8";
   
    let header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    const data = {};
    this.http
      .post(
        `https://4obg8v558d.execute-api.ap-south-1.amazonaws.com/dev/order/complete/${this.orderId}`,
        data,
        { headers: header }
      )
      .subscribe((re) => {
       this.order.setTabMode("Completed");
        this.nav.navigateForward(["/home/tabs/order"]);
        console.log(re);
      });
  }
  add() {
    this.order.seIsAdd(true);
    console.log("add");
    this.router.navigate(["home/tabs/order/ongoingorder-detail/update-order"]);
  }
  back() {
    console.log("backwork");
    if (this.completed === false) {
      this.order.setTabMode("On-Going");
    } else {
      this.order.setTabMode("Completed");
    }
  }
  Remove(){
      this.order.seIsAdd(false, this.orderdetails);
    console.log("Remove");
    
 this.router.navigate(["home/tabs/order/ongoingorder-detail/update-order"]);
  }
}
