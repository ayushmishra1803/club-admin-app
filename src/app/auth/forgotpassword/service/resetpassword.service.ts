import { Router } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ResetpasswordService {

  constructor(private router:Router) { }
 private email:string;
  setemail(email:string)
  {
    this.email=email;
  }
  getemail(){
    if(!this.email)
    {
      this.router.navigate(["/forgotpassword"]);
    }
    return this.email;
    }
 
}
