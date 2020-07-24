import { request } from "./../request/interface/request-model";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-confirmed",
  templateUrl: "./confirmed.page.html",
  styleUrls: ["./confirmed.page.scss"],
})
export class ConfirmedPage implements OnInit {
  constructor(private http: HttpClient) {}

  requests:any=[] ;
  ngOnInit() {
    let data = {
      day: "Friday",
    };
    this.http
      .post<{ data: request[] }>(
        "https://4obg8v558d.execute-api.ap-south-1.amazonaws.com/dev/guestlist/confirmed",
        data
      )
      .subscribe((re) => {
        this.requests = re;
        console.log(re);
        
        console.log(this.requests);
      });
  }
}
