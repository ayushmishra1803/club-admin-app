import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TableService {
  constructor() {}
  private date: string;
  private day: string;
  setday_date(day: string, date: string) {
    this.date = date;
    this.day = day;
    console.log(this.date,this.day);
    
  }
  getdate() {
    return this.date;
  }
  getday() {
    return this.day;
  }
}
