import { HttpHeaders } from "@angular/common/http";
import { request } from "./../../../table/tabs/request/interface/request";
import { AuthService } from "./../../../../service/auth/auth.service";
import { GuestListService } from "./../service/guest-list.service";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-guest-list-request",
  templateUrl: "./guest-list-request.component.html",
  styleUrls: ["./guest-list-request.component.scss"],
})
export class GuestListRequestComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private service: GuestListService,
    private auth: AuthService
  ) {}
  requests: request[] = [];
  private token: string;

  day: string = "";
  date: string = "";
  getdata() {
    this.day = this.service.getday();
    this.date = this.service.getdate();
    let data = {
      day: this.day.trim(),
      date: this.date.trim(),
      // day: "Tuesday",
      //date: "2020-07-28",
    };
    let header = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    this.http
      .post<{ data: request[] }>(
        "https://4obg8v558d.execute-api.ap-south-1.amazonaws.com/dev/guestlist/request",
        data,
        { headers: header }
      )
      .subscribe((re) => {
        this.requests = re.data;

        console.log(this.requests);
      });
  }
  ngOnInit() {
    this.token = this.auth.getToken();
    console.log(this.token);

    this.getdata();
  }
  yes(email: string) {
    let header = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    //Real Logic
    let data = { day: this.day.trim(), date: this.date.trim(), user: email };
    //dummy test Case
    //let data = { day: "Tuesday", date: "2020-07-28", user: email };
    this.http
      .put(
        "https://4obg8v558d.execute-api.ap-south-1.amazonaws.com/dev/guestlist/acceptrequest",
        data,
        { headers: header }
      )
      .subscribe((re) => {
        console.log(re);
        this.getdata();
      });
  }
  no(email: string) {
    let header = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    console.log(email);
    //Real Logic
    let data = { day: this.day.trim(), date: this.date.trim(), user: email };
    //Test Case
    //let data = { day: "Tuesday", date: "2020-07-28", user: email };
    this.http
      .put(
        "https://4obg8v558d.execute-api.ap-south-1.amazonaws.com/dev/guestlist/denyrequest",
        data,
        { headers: header }
      )
      .subscribe((re) => {
        console.log(re);
        this.getdata();
      });
  }
}
