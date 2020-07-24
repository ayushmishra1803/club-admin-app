import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuestListService {

  constructor(private router:Router) { }
 private day:string
  setday(day:string)
  {
    this.day=day;
  }
  getday(){
    if(!this.day){
      this.router.navigate(["/home/tabs/guestlist"]);
    }
    else{
     return this.day
    }
  }
}
