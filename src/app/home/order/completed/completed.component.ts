import { DatePipe } from '@angular/common';
import { AuthService } from './../../../service/auth/auth.service';
import { OrderdetailsService } from "./../service/order/orderdetails.service";
import { order } from "./../on-going/interface/onGoing";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-completed",
  templateUrl: "./completed.component.html",
  styleUrls: ["./completed.component.scss"],
})
export class CompletedComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private router: Router,
    private service: OrderdetailsService,
    private auth:AuthService,
    private date :DatePipe
  ) {}
  completedData: order[] = [];
  getdata(){
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
    "https://4obg8v558d.execute-api.ap-south-1.amazonaws.com/dev/order/past",
    data,
    { headers: header }
  )
  .subscribe((re) => {
    this.completedData = re.data;
    console.log(re);
  });
  }
  ngOnInit() {
    this.getdata();
  }
  ionViewDidEnter(){
    this.getdata();
  }
  onclick(id: string) {
    this.service.setOrderId(id, true);
    this.router.navigate(["/home/tabs/order/ongoingorder-detail"]);
  }
}
