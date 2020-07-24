import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-guestlist",
  templateUrl: "./guestlist.page.html",
  styleUrls: ["./guestlist.page.scss"],
})
export class GuestlistPage implements OnInit {
  constructor(private http: HttpClient) {}

  request = [];
  days: string[] = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  ngOnInit() {
    // let day = {
    //   day: "Friday",
    // };
    // this.http
    //   .post<{ data: any[] }>(
    //     "https://4obg8v558d.execute-api.ap-south-1.amazonaws.com/dev/guestlist/request",
    //     day
    //   )
    //   .subscribe((re) => {
    //     this.request = re.data.user_data;
    //     console.log(this.request);
    //   });
  }
  selectedday(day:string){
    console.log(day);
    
  }
}
