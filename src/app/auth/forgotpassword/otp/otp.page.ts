import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-otp",
  templateUrl: "./otp.page.html",
  styleUrls: ["./otp.page.scss"],
})
export class OtpPage implements OnInit {
  constructor() {}

  ngOnInit() {}
  onsubmit(f:NgForm){
    console.log(f.value.otp);
    
  }
}
