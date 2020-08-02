import { clubdata } from './interface/login/clubdata';
import { AuthService } from "./../../service/auth/auth.service";
import { data } from "./data";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { LoadingController } from "@ionic/angular";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError } from "rxjs/operators";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  constructor(
    private loading: LoadingController,
    private router: Router,
    private http: HttpClient,
    private auth: AuthService
  ) {}
  post = {};

  city: string;
  club: string;
  clubdata:clubdata[]=[];

  ngOnInit() {
    this.city = this.auth.getcity();
    this.club = this.auth.getclub();
    console.log(this.city);
    console.log(this.club);
  }
  onsubmit(f: NgForm) {
    this.post = {
      email: f.value.email,
      password: f.value.password,
      city: this.city.trim(),
      club_name: this.club.trim(),
    };
    //console.log(this.post);

    this.loading
      .create({ keyboardClose: true, message: "Logging in..." })
      .then((res) => {
        res.present();
        this.http
          .post<{ status: boolean; message: string; data: clubdata[] }>(
            "https://4obg8v558d.execute-api.ap-south-1.amazonaws.com/dev/login",
            this.post
          )
          .subscribe(
            (data) => {
              console.log(data);
              if (!data) {
                res.dismiss();
                this.router.navigate(["/login"]);
              } else {
                if (data.status === true) {
                  this.clubdata=data.data
                
            this.auth.setToken(this.clubdata.access);
                  
                  this.router.navigate(["/home"]);
                  res.dismiss();
                }
              }
            },
            (err) => {
              res.dismiss();
              console.log(err.message);
            }
          );
      });
  }

  forgot() {
    this.router.navigate(["/forgotpassword"]);
  }
  //ayushmishra0810@gmail.com
  //12356890

  //<-**************Register User*******************->//

  //  let postR = {
  //      email: "ayushmishr1@gmail.com",
  //       password: "12356890",
  //      club_name: " Child",
  //      city: "Bhopal",
  //       address: "abcd 12",
  ///      cover_charge: 1000,
  ////     };
  //  this.http.post(
  //     "https://4obg8v558d.execute-api.ap-south-1.amazonaws.com/dev/registeruser",postR
  //   ).subscribe(re=>{
  //     console.log(re);
  //
  //   });
}
