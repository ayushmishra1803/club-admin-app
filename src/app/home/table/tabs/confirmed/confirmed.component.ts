import { HttpHeaders, HttpClient } from "@angular/common/http";
import { TableService } from "./../../service/table/table.service";
import { AuthService } from "./../../../../service/auth/auth.service";
import { Component, OnInit } from "@angular/core";
import {DatePipe} from "@angular/common"

@Component({
  selector: "app-confirmed",
  templateUrl: "./confirmed.component.html",
  styleUrls: ["./confirmed.component.scss"],
})
export class ConfirmedComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private service: TableService,
    private http: HttpClient,
    private datepipe: DatePipe
  ) {}

  private date: string;
  private day: string;
  private token: string;
  nowmonth = new Date();
  days: number[] = [];
  month: string;
  ngOnInit() {
    this.month = this.datepipe.transform(this.nowmonth, "MMM");
    for (let i = 0; i < 7; i++) {
      let today = new Date();
      let data = today.setDate(today.getDate() + i);
      this.days.push(data);
    }
    console.log(this.days);
    this.date = this.service.getdate();
    this.day = this.service.getday();
    this.token = this.auth.getToken();
    let data = {
      day: this.day.trim(),
      date: this.date.trim(),
    };
    let header = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    this.http
      .post(
        "https://4obg8v558d.execute-api.ap-south-1.amazonaws.com/dev/tablelist/confirms",
        data,
        { headers: header }
      )
      .subscribe((re) => {
        console.log(re);
      });
  }
  onCategoryChange(category: Date) {
    console.log(this.datepipe.transform(category, "EEEE"));
    console.log(this.datepipe.transform(category));
    this.month = this.datepipe.transform(category, "MMM");
  }
}
