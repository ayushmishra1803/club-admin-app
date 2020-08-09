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
    private service: OrderdetailsService
  ) {}
  completedData: order[] = [];
  getdata(){
let token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTk2OTg3Nzg0LCJqdGkiOiJhMzQ1MmU4N2QwNzU0ZjljOWRjODE2MTJlZWQ5ZjRjYSIsInV1aWQiOiIwYTc2MzI2ZC1jZWU4LTRjMzAtYmUyYy03NTgzZDE3ZTg5OGQifQ.qzYBwURN5Gee9GhhRffR2PHjvbCoXtVd7jV7DsoPd4Q";
let header = new HttpHeaders({
  Authorization: `Bearer ${token}`,
});
let data = {
  date: "2020-08-10",
  day: "Monday",
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
