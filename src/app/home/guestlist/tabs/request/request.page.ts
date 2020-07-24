import { request } from './interface/request-model';
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-request",
  templateUrl: "./request.page.html",
  styleUrls: ["./request.page.scss"],
})
export class RequestPage implements OnInit {
  constructor(private http: HttpClient) {}
  requests:request[]=[];
  ngOnInit() {
    let day = {
      day: "Friday",
    };
    this.http
      .post<{ data: request[] }>(
        "https://4obg8v558d.execute-api.ap-south-1.amazonaws.com/dev/guestlist/request",
        day
      )
      .subscribe((re) => {
        this.requests = re.data.user_data;
        console.log(this.requests);
      });
  }
}
