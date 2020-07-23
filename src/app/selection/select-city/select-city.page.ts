import { AuthService } from './../../service/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { city } from './interface/selectcity';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-select-city",
  templateUrl: "./select-city.page.html",
  styleUrls: ["./select-city.page.scss"],
})
export class SelectCityPage implements OnInit {
  constructor(private router:Router,private http:HttpClient,private  auth:AuthService) {}
  city:city[]=[]

  ngOnInit() {
     this.http
       .get<{ data: city[] }>(
         "https://4obg8v558d.execute-api.ap-south-1.amazonaws.com/dev/citylist"
       )
       .subscribe((re) => {
         this.city = re.data;
         console.log(this.city);
       });
  }
  onsubmit(f: NgForm) {
    console.log(f.value.select);
    this.auth.selectedCity(f.value.select);
    this.router.navigate(["select-club"]);
  }
}
