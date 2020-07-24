import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-request",
  templateUrl: "./request.page.html",
  styleUrls: ["./request.page.scss"],
})
export class RequestPage implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    let day = {
      day: "Friday",
    };
    this.http
      .post<{ data: any[] }>(
        "https://4obg8v558d.execute-api.ap-south-1.amazonaws.com/dev/guestlist/request",
        day
      )
      .subscribe((re) => {
        //this.request = re.data.user_data;
        console.log(re);
      });
  }
}
