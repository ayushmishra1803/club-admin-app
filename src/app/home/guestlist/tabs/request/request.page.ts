import { GuestListService } from './../service/guest-list.service';
import { request } from './interface/request-model';
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-request",
  templateUrl: "./request.page.html",
  styleUrls: ["./request.page.scss"],
})
export class RequestPage implements OnInit {
  constructor(private http: HttpClient,private service:GuestListService) {}
  requests: request[] = [];
  day:string=""
  ngOnInit() {
     this.day = this.service.getday();
     let data = {
       day: this.day.trim(),
     };
   
    this.http
      .post<{ data: request[] }>(
        "https://4obg8v558d.execute-api.ap-south-1.amazonaws.com/dev/guestlist/request",
        data
      )
      .subscribe((re) => {
        this.requests = re.data;
        console.log(this.requests);
      });
  }
  yes(email: string) {
    console.log(email);
    let data = { day: "Friday", user: email };
    this.http
      .put(
        "https://4obg8v558d.execute-api.ap-south-1.amazonaws.com/dev/guestlist/acceptrequest",
        data
      )
      .subscribe((re) => {
        console.log(re);
      });
  }
  no(email: string) {
    console.log(email);
    let data = { day: "Friday", user: email };
    this.http.put(
      "https://4obg8v558d.execute-api.ap-south-1.amazonaws.com/dev/guestlist/denyrequest",data
    ).subscribe(re=>{
      console.log(re);
      
    });
  }
}