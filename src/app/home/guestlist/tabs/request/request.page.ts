import { GuestListService } from "./../service/guest-list.service";
import { request } from "./interface/request-model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-request",
  templateUrl: "./request.page.html",
  styleUrls: ["./request.page.scss"],
})
export class RequestPage implements OnInit {
  constructor(private http: HttpClient, private service: GuestListService) {}
  requests: request[] = [];
  token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTk2MDE0NDI5LCJqdGkiOiJiZmM3MGVlNzU3ZGM0OGJiYjYzOWM1MzIyMDgxYzQ0ZSIsInV1aWQiOiIwNTljMThhMi02OWY3LTRlYTAtOTdiZS1kZDEwYTBmYmFiMjEifQ.5dN7vvkIkCrlJUOrFjjLTTAgEc1TLDntywCabbKCq0M";

  header = new HttpHeaders({
    Authorization: `Bearer ${this.token}`,
  });
  day: string = "";
  getdata() {
    this.day = this.service.getday();
    let data = {
      day: this.day.trim(),
      date: "2020-07-28",
    };
    

    this.http
      .post<{ data: request[] }>(
        "https://4obg8v558d.execute-api.ap-south-1.amazonaws.com/dev/guestlist/request",
        data,
        { headers: this.header }
      )
      .subscribe((re) => {
        this.requests = re.data;

        console.log(this.requests);
      });
  }
  ngOnInit() {
    this.getdata();
  }
  yes(email: string) {
    let data = { day: "Friday", user: email };
    this.http
      .put(
        "https://4obg8v558d.execute-api.ap-south-1.amazonaws.com/dev/guestlist/acceptrequest",
        data
      )
      .subscribe((re) => {
        console.log(re);
        this.getdata();
      });
  }
  no(email: string) {
    console.log(email);
    let data = { day: "Friday", user: email };
    this.http
      .put(
        "https://4obg8v558d.execute-api.ap-south-1.amazonaws.com/dev/guestlist/denyrequest",
        data
      )
      .subscribe((re) => {
        console.log(re);
        this.getdata();
      });
  }
}
