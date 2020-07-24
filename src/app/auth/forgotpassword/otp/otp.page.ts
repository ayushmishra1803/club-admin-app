import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-otp",
  templateUrl: "./otp.page.html",
  styleUrls: ["./otp.page.scss"],
})
export class OtpPage implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {}
  onsubmit(f: NgForm) {
    console.log(f.value.otp);
    let opt = {};
    opt = {
      code: f.value.otp,
    };
    this.http
      .post<{ status: boolean }>(
        "https://4obg8v558d.execute-api.ap-south-1.amazonaws.com/dev/otpvalidation",
        opt
      )
      .subscribe((re) => {
        console.log(re);

        if (re.status === true) {
          this.router.navigate(["/forgotpassword/otp/reset-password"]);
        }
      });
  }
  back(){
    this.router.navigate(['/login'])
  }
}
