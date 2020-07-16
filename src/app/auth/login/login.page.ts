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

  post = 
    {
      email: "ayushmishra0810@gmail.com",
      password: "12356890",
      club_name: "Moon Child",
      address: "abcd 12",
      cover_charge: 1000,
    };
  

  ngOnInit() {}
  onsubmit(f: NgForm) {
    this.loading
      .create({ keyboardClose: true, message: "Logging in..." })
      .then((re) => {
        re.present();
        setTimeout(() => {
          console.log(f.value.email);
          re.dismiss();
        }, 2000);
      });

    this.router.navigate(["/home"]);
    this.http
      .post(
        "https://bp1kdw1c7i.execute-api.ap-south-1.amazonaws.com/dev_1/registeruser"
          ,
        `${this.post}`
      )
      .subscribe((re) => {
        console.log(re);
      });
  }
  forgot() {
    this.router.navigate(["/forgotpassword"]);
  }
}
