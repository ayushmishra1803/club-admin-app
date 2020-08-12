import { group_Details } from './../../table/tabs/request/group-details/interface/group';
import { data } from './../../../auth/login/data';
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { AuthService } from "./../../../service/auth/auth.service";
import { OrderdetailsService } from "./../service/order/orderdetails.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-group-details",
  templateUrl: "./group-details.page.html",
  styleUrls: ["./group-details.page.scss"],
})
export class GroupDetailsPage implements OnInit {
  constructor(
    private service: OrderdetailsService,
    private auth: AuthService,
    private router: Router,
    private http: HttpClient
  ) {}
  GroupId: string;

  details: group_Details[] = [];

  ngOnInit() {
    this.GroupId = this.service.getGroupId();
    console.log(this.GroupId);
    const token = this.auth.getToken();
    let header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    this.http
      .get<{ data: group_Details[] }>(
        `https://4obg8v558d.execute-api.ap-south-1.amazonaws.com/dev/groupdetails/${this.GroupId}`,
        { headers: header }
      )
      .subscribe((re) => {
        this.details=re.data;
        console.log(re);
      });
  }
}
