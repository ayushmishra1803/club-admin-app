import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  constructor(private loading:LoadingController,private router:Router) {}

  ngOnInit() {}
  onsubmit(f:NgForm){
   this.loading.create({keyboardClose:true,message:"Logging in..."}).then((re)=>{
     re.present();
     setTimeout(() => {
       console.log(f.value.email);
       re.dismiss();
     }, 2000);
    
   })
     
      this.router.navigate(['/home'])
  }
}
