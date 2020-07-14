import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: "app-forgotpassword",
  templateUrl: "./forgotpassword.page.html",
  styleUrls: ["./forgotpassword.page.scss"],
})
export class ForgotpasswordPage implements OnInit {
  constructor(private Router:Router) {}

  ngOnInit() {}
  onsubmit(f:NgForm){
  this.Router.navigate(["forgotpassword/otp"]);
  }
}
