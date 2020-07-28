import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: "root",
})
export class GuestListService {
  constructor(private router: Router) {}
  private day: string;
  private date: string;
  setday(day: string, date: string) {
    
      this.date = date;
      this.day = day;
    
  }
  getday() {
   
      
      return this.day;
    
  }
  getdate(){
   
    
    
      return this.date
    
  }
}
