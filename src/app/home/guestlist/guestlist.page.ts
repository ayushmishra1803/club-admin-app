import { Router } from "@angular/router";
import { GuestListService } from "./tabs/service/guest-list.service";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { DatePipe } from '@angular/common';

@Component({
  selector: "app-guestlist",
  templateUrl: "./guestlist.page.html",
  styleUrls: ["./guestlist.page.scss"],
})
export class GuestlistPage implements OnInit {
  constructor(
    private http: HttpClient,
    private service: GuestListService,
    private router: Router,
    private date:DatePipe
  ) {}

  request = [];
  week: number[] = [];
  ngOnInit() {
    for (let i = 0; i < 7; i++) {
      let today = new Date();
      let data = today.setDate(today.getDate() + i);
      this.week.push(data);
    }
  }
  selectedday(day: string) {
    
   // this.service.setday(day);
    console.log(this.date.transform(day,"EEEE"));
    console.log(this.date.transform(day,"yyyy-MM-dd"));
    this.service.setday(
      this.date.transform(day, "EEEE"),
      this.date.transform(day, "yyyy-MM-dd")
    );
    this.router.navigate(["/home/tabs/guestlist/tabs"]);
  }
}
