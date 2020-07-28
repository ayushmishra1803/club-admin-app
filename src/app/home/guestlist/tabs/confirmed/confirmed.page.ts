import { AuthService } from './../../../../service/auth/auth.service';
import { GuestListService } from "./../service/guest-list.service";
import { request } from "./../request/interface/request-model";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-confirmed",
  templateUrl: "./confirmed.page.html",
  styleUrls: ["./confirmed.page.scss"],
})
export class ConfirmedPage implements OnInit {
  constructor(private http: HttpClient, private service: GuestListService,private auth:AuthService) {}

  requests: any = [];
  day: string = "";
  date:string="";
private token:string
  ngOnInit() {
    this.token=this.auth.getToken();
    this.day = this.service.getday();
    this.date=this.service.getdate();
    let data = {
      //Test Case
     // day:"Tuesday",
      //date:"2020-07-28"
     // Real Case
       day: this.day.trim(),
       date:this.date.trim()
    };
    let header = new HttpHeaders({ Authorization: `Bearer ${this.token}` });

    this.http
      .post<{ data: request[] }>(
        "https://4obg8v558d.execute-api.ap-south-1.amazonaws.com/dev/guestlist/confirmed",
        data,{headers:header}
      )
      .subscribe((re) => {
        this.requests = re.data;
        console.log(re);

        console.log(this.requests);
      },err=>{
        console.log(err.message);
        
      });
  }
}
