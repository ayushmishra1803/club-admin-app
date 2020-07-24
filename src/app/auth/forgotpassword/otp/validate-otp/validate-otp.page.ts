import { ResetpasswordService } from './../../service/resetpassword.service';
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
  constructor(private router:Router,private http:HttpClient,private reset:ResetpasswordService) {}
  email:string;
  ngOnInit() {
    this.email=this.reset.getemail();
  }
  
  submit(f: NgForm) {
    console.log(f.value.newpassword, f.value.repassword);
    let data={}
    data = {
      email: this.email.trim(),
      new_password: f.value.newpassword,
      confirm_password: f.value.repassword,
    };
   this.http.post<{status:boolean}>(
     "https://4obg8v558d.execute-api.ap-south-1.amazonaws.com/dev/forgotpasswordchange",data
   ).subscribe(re=>{
     console.log(re);
     
    if (re.status === true) {
      this.router.navigate(['/select-city'])
      console.log("changed");
      
    }
  
     
   });
  }
 
}
