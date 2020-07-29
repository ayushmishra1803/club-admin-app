import { HttpClient, HttpHeaders } from "@angular/common/http";
import { TableService } from "./../../../service/table/table.service";
import { AuthService } from "./../../../../../service/auth/auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-group-details",
  templateUrl: "./group-details.page.html",
  styleUrls: ["./group-details.page.scss"],
})
export class GroupDetailsPage implements OnInit {
  constructor(
    private auth: AuthService,
    private service: TableService,
    private http: HttpClient
  ) {}

  group_id: string;
  private day: string;
  private date: string;
  private token: string;
  ngOnInit() {
    // this.date = this.service.getdate();
    // this.day = this.service.getday();
    this.group_id = this.service.get_Groupid();
    this.token = this.auth.getToken();
    // let data = {
    //   day: this.day.trim(),
    //   date: this.date.trim(),
    // };
    let header = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    this.http
      .get(
        `https://4obg8v558d.execute-api.ap-south-1.amazonaws.com/dev/groupdetails/${this.group_id}`,
        { headers: header }
      )
      .subscribe((re) => {
        console.log(re);
      });
  }
}
