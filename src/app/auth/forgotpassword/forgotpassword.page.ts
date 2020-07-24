import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: "app-forgotpassword",
  templateUrl: "./forgotpassword.page.html",
  styleUrls: ["./forgotpassword.page.scss"],
})
export class ForgotpasswordPage implements OnInit {
  constructor(private Router:Router,private http:HttpClient) {}

  ngOnInit() {}
  email={};
  onsubmit(f:NgForm){
    this.email = { email: f.value.email };
    this.http.post(
      "https://4obg8v558d.execute-api.ap-south-1.amazonaws.com/dev/forgotpasswordotp",this.email
    ).subscribe(re=>{
      console.log(re);
      
    });
  //this.Router.navigate(["forgotpassword/otp"]);
  }
}
