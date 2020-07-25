import { data } from './../../auth/login/data';
import { clubList } from "./club/club.-interface";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { AuthService } from "./../../service/auth/auth.service";
import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";
@Component({
  selector: "app-select-club",
  templateUrl: "./select-club.page.html",
  styleUrls: ["./select-club.page.scss"],
})
export class SelectClubPage implements OnInit {
  constructor(
    private auth: AuthService,
    private router: Router,
    private http: HttpClient
  ) {}
  clubs: clubList[] = [];
  city = {};

  ngOnInit() {
   let selectedcity = this.auth.getcity().trim();

    this.city = { city: `${selectedcity.trim()}` };
    console.log(this.city);
    this.http
      .post<{ data: clubList[] }>(
        "https://4obg8v558d.execute-api.ap-south-1.amazonaws.com/dev/clublist",
        this.city
      )
      .subscribe((re) => {
        this.clubs = re.data;
        
        console.log(this.clubs);
      });
  }
  // serachclub: any = [];
  // initializeClubs() {
  //   this.clubs;
  // }

  onclick(club: string) {
    console.log(club);
    this.auth.setclub(club);
    this.router.navigate(["/login"]);
  }
  // getClubs(ev) {
  //   //this.initializeClubs();
  //   var val = ev.target.value;
  //   if (val && val.trim() != "") {
  //     this.clubs = this.clubs.filter((Club) => {
  //       return Club.toLowerCase().indexOf(val.toLowerCase()) > -1;
  //     });
  //   }
  // }
}
