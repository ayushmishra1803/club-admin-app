import { ResetpasswordService } from "./service/resetpassword.service";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-forgotpassword",
  templateUrl: "./forgotpassword.page.html",
  styleUrls: ["./forgotpassword.page.scss"],
})
export class ForgotpasswordPage implements OnInit {
  constructor(
    private Router: Router,
    private http: HttpClient,
    private reset: ResetpasswordService
  ) {}

  ngOnInit() {}
  email = {};
  otp: number;
  onsubmit(f: NgForm) {
    this.email = { email: f.value.email.trim() };
    console.log(this.email);
    this.reset.setemail(f.value.email);
    this.http
      .post<{ status: boolean; data: number }>(
        "https://4obg8v558d.execute-api.ap-south-1.amazonaws.com/dev/forgetpasswordotp",
        this.email
      )
      .subscribe((re) => {
        this.otp = re.data;
        if (re.status === true) {
          this.Router.navigate(["/forgotpassword/otp"]);
        }
        console.log(this.otp);
      });
  }
}
