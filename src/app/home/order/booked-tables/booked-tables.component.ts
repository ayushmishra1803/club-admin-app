import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { BookedTable } from "./interface/bookedinterface";

@Component({
  selector: "app-booked-tables",
  templateUrl: "./booked-tables.component.html",
  styleUrls: ["./booked-tables.component.scss"],
})
export class BookedTablesComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}
  BookedTable: BookedTable[] = [];
  ngOnInit() {
    let token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTk2ODkwNDg5LCJqdGkiOiJkMjhlNTA4YzBmOTI0MWNmODc5ZDJlYjlkZWNhMzJjYSIsInV1aWQiOiIwNTljMThhMi02OWY3LTRlYTAtOTdiZS1kZDEwYTBmYmFiMjEifQ.oqtWfXD91RZm5bqP1Oeq4dNXj7rM9Yseh_ris0-2zkE";
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
  createorder() {
    console.log("Hello");
    this.router.navigate(["/home/tabs/order/create-order"]);
  }
}
