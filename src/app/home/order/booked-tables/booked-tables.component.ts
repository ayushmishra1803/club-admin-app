import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { BookedTable } from "./interface/bookedinterface";
import { OrderdetailsService } from '../service/order/orderdetails.service';

@Component({
  selector: "app-booked-tables",
  templateUrl: "./booked-tables.component.html",
  styleUrls: ["./booked-tables.component.scss"],
})
export class BookedTablesComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router,private service:OrderdetailsService) {}
  BookedTable: BookedTable[] = [];
  ngOnInit() {
    let token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTk2OTg3Nzg0LCJqdGkiOiJhMzQ1MmU4N2QwNzU0ZjljOWRjODE2MTJlZWQ5ZjRjYSIsInV1aWQiOiIwYTc2MzI2ZC1jZWU4LTRjMzAtYmUyYy03NTgzZDE3ZTg5OGQifQ.qzYBwURN5Gee9GhhRffR2PHjvbCoXtVd7jV7DsoPd4Q";
    let header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    let data = {
      date: "2020-08-10",
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
  createorder(id:string) {
    console.log("Hello");
    this.service.setcreateorderId(id);
    this.router.navigate(["/home/tabs/order/create-order"]);
  }
}
