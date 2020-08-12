import { AuthService } from './../../../service/auth/auth.service';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { BookedTable } from "./interface/bookedinterface";
import { OrderdetailsService } from "../service/order/orderdetails.service";

@Component({
  selector: "app-booked-tables",
  templateUrl: "./booked-tables.component.html",
  styleUrls: ["./booked-tables.component.scss"],
})
export class BookedTablesComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private router: Router,
    private service: OrderdetailsService,
    private auth:AuthService
  ) {}
  BookedTable: BookedTable[] = [];
  getdata() {
    let token =this.auth.getToken();
     
    let header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    let data = {
      date: "2020-08-11",
    };
    this.http
      .post<{ status: boolean; message: string; data: BookedTable[] }>(
        "https://4obg8v558d.execute-api.ap-south-1.amazonaws.com/dev/order/bookedtables",
        data,
        { headers: header }
      )
      .subscribe((re) => {
        this.BookedTable = re.data;
        console.log(re);
      });
  }
  ngOnInit() {
    this.getdata();
  }
  ionViewDidEnter() {
    this.getdata();
  }
  createorder(id: string) {
    console.log("Hello");
    this.service.setcreateorderId(id);
    this.router.navigate(["/home/tabs/order/create-order"]);
  }
  Groupdetail(details: BookedTable) {
    console.log(details);
    
  }
}
