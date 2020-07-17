import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { LoadingController } from "@ionic/angular";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  constructor(
    private loading: LoadingController,
    private router: Router,
    private http: HttpClient
  ) {}
  //User id and password
  //12356890
  //khushbooothakur235@gmail.com
  post = {};

  ngOnInit() {}
  onsubmit(f: NgForm) {
    this.post={email:f.value.email,password:f.value.password}
    this.loading
      .create({ keyboardClose: true, message: "Logging in..." })
      .then((re) => {
        re.present();
        this.http
          .post<{ status: boolean; message: string; data: any }>(
            "https://bp1kdw1c7i.execute-api.ap-south-1.amazonaws.com/dev_1/login",
            this.post
          )
          .subscribe((re) => {
            console.log(re);
            
            if (re.status === true) {
              this.router.navigate(["/home"]);
            } else {
              this.router.navigate(["/login"]);
            }
          });
        re.dismiss();
      });
  }
  forgot() {
    
     this.router.navigate(["/forgotpassword"]);
  }
}
