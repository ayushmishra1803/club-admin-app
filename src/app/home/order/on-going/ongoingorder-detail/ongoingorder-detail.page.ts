import { AuthService } from "./../../../../service/auth/auth.service";
import { OrderFeedbackComponent } from "./order-feedback/order-feedback.component";

import { NavController, ModalController } from "@ionic/angular";
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
    private nav: NavController,
    private model: ModalController,
    private auth: AuthService
  ) {}
  orderId: string;
  completed: boolean;
  orderdetails: itemdetails[] = [];
  onGoingDetails: onGoingDetails;
  getdata() {
    let token = this.auth.getToken();
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
  generateBill(f: string) {
    console.log(f);
    this.order.setGroupId(f);
    let token = this.auth.getToken();
    let header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    const data = {};

    this.model
      .create({ component: OrderFeedbackComponent })
      .then((re) => {
        re.present();
        return re.onDidDismiss();
      })
      .then((re) => {
        console.log(re.data, re.role);
        if (re.role === "success") {
          console.log("hos gya kaam");
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
        } else {
          console.log("failed Try Again");
        }
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
  Remove() {
    this.order.seIsAdd(false, this.orderdetails);
    console.log("Remove");

    this.router.navigate(["home/tabs/order/ongoingorder-detail/update-order"]);
  }
}
