import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-booked-tables",
  templateUrl: "./booked-tables.component.html",
  styleUrls: ["./booked-tables.component.scss"],
})
export class BookedTablesComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    let token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTk2ODkwNDg5LCJqdGkiOiJkMjhlNTA4YzBmOTI0MWNmODc5ZDJlYjlkZWNhMzJjYSIsInV1aWQiOiIwNTljMThhMi02OWY3LTRlYTAtOTdiZS1kZDEwYTBmYmFiMjEifQ.oqtWfXD91RZm5bqP1Oeq4dNXj7rM9Yseh_ris0-2zkE";
    let header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    let data = {
      date: "2020-08-10",
    };
    this.http.post(
      "https://4obg8v558d.execute-api.ap-south-1.amazonaws.com/dev/order/bookedtables",
      data,
      { headers: header }
    ).subscribe(re=>{
      console.log(re);
      
    });
  }
}
