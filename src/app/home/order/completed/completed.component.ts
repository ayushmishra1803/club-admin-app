import { order } from './../on-going/interface/onGoing';
import { Router } from "@angular/router";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-completed",
  templateUrl: "./completed.component.html",
  styleUrls: ["./completed.component.scss"],
})
export class CompletedComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}
  completedData:order[]=[]
  ngOnInit() {
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
      .post<{message:string ,data:order[]}>(
        "https://4obg8v558d.execute-api.ap-south-1.amazonaws.com/dev/order/past",
        data,
        { headers: header }
      )
      .subscribe((re) => {
        this.completedData=re.data
        console.log(re);
      });
  }
}
