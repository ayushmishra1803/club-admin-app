import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-validate-otp",
  templateUrl: "./validate-otp.page.html",
  styleUrls: ["./validate-otp.page.scss"],
})
export class ValidateOtpPage implements OnInit {
  constructor(private router:Router,private http:HttpClient) {}

  ngOnInit() {}
  submit(f: NgForm) {
    console.log(f.value.newpassword, f.value.repassword);
   // this.http.post("")
  }
 
}
