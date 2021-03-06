import { DatePipe } from '@angular/common';
import { Subject } from 'rxjs';
import { OrderdetailsService } from "./../service/order/orderdetails.service";
import { order } from "./interface/onGoing";
import { AuthService } from "./../../../service/auth/auth.service";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-on-going",
  templateUrl: "./on-going.component.html",
  styleUrls: ["./on-going.component.scss"],
})
export class OnGoingComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private router: Router,
    private auth: AuthService,
    private order: OrderdetailsService,
    private  navCtrl: NavController,
    private date:DatePipe
   

  ) {}
  onGoingData: order[] = [];
  ongoing=new Subject();
    
  getdata() {
    
     let token =this.auth.getToken();
      let header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
 const today=new Date()
    console.log(today);
    
    let data = {
      date: this.date.transform(today,"yyyy-MM-dd"),
      day:this.date.transform(today,"EEE")
    };
    this.http
      .post<{ message: string; data: order[] }>(
        "https://4obg8v558d.execute-api.ap-south-1.amazonaws.com/dev/order/ongoing",
        data,
        { headers: header }
      )
      .subscribe((re) => {
        this.onGoingData = re.data;
        console.log(re);
      });
  }
  ngOnInit() {
    this.getdata();
  }

  ionViewWillEnter() {
    this.getdata();
  }
  details(id: string) {
    this.order.setOrderId(id, false);
    console.log(id);
    this.router.navigate(["/home/tabs/order/ongoingorder-detail"]);
  }
}
