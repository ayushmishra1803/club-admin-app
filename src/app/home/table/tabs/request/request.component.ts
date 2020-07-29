import { request } from "./../../../table/tabs/request/interface/request";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { TableService } from "./../../service/table/table.service";
import { AuthService } from "./../../../../service/auth/auth.service";
import { Component, OnInit } from "@angular/core";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-request",
  templateUrl: "./request.component.html",
  styleUrls: ["./request.component.scss"],
})
export class RequestComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private servie: TableService,
    private http: HttpClient,
    private dates: DatePipe
  ) {}
  private day: string;
  private date: string;
  private token: string;
  request: request[] = [];
  nowmonth = new Date();
  days: number[] = [];
  month: string;
  getrequest() {
    let data = {
      day: this.day.trim(),
      date: this.date.trim(),
    };
    let header = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    this.http
      .post<{ status: boolean; data: request[] }>(
        "https://4obg8v558d.execute-api.ap-south-1.amazonaws.com/dev/tablelist/requests",
        data,
        { headers: header }
      )
      .subscribe((re) => {
        this.request = re.data;
        console.log(this.request);
      });
  }
  ngOnInit() {
    this.token = this.auth.getToken();
    this.date = this.servie.getdate();
    this.day = this.servie.getday();
    this.getrequest();
    this.month = this.dates.transform(this.nowmonth, "MMM");
    for (let i = 0; i < 7; i++) {
      let today = new Date();
      let data = today.setDate(today.getDate() + i);
      this.days.push(data);
    }
    console.log(this.days);
  }
  groupdetails(id: string) {
    this.servie.Set_Groupid(id);
  }
  onCategoryChange(category: string) {
    console.log(this.dates.transform(category, "EEEE"));
    console.log(this.dates.transform(category));
    this.month = this.dates.transform(category, "MMM");
    this.date = this.dates.transform(category, "yyyy-MM-dd");
    this.day = this.dates.transform(category, "EEEE");
      this.servie.setday_date(
        this.dates.transform(category, "EEEE"),
        this.dates.transform(category, "yyyy-MM-dd")
      );
    this.getrequest();

  }
}
