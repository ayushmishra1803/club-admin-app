import { order } from './interface/onGoing';
import { AuthService } from "./../../../service/auth/auth.service";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-on-going",
  templateUrl: "./on-going.component.html",
  styleUrls: ["./on-going.component.scss"],
})
export class OnGoingComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private router: Router,
    private auth: AuthService
  ) {}
  onGoingData:order[]=[]

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
      .post<{message:string,data:order[]}>(
        "https://4obg8v558d.execute-api.ap-south-1.amazonaws.com/dev/order/ongoing",
        data,
        { headers: header }
      )
      .subscribe((re) => {
        this.onGoingData=re.data
        console.log(re);
      });
  }
}
