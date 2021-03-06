import { Subject } from 'rxjs';
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TableService {
  constructor(private router: Router) {}
  private date: string;
  private day: string;
  private groupId: string;
  buttondisable = new Subject<boolean>();
  setday_date(day: string, date: string) {
    this.date = date;
    this.day = day;
    console.log(this.date, this.day);
    this.router.navigate(["/home/tabs/table/tabs"]);
  }
  getdate() {
    return this.date;
  }
  getday() {
    return this.day;
  }
  Set_Groupid(id: string) {
    this.groupId = id;
    console.log(this.groupId);
    this.router.navigate(["/home/tabs/table/tabs/group-details"]);
  }
  get_Groupid() {
    return this.groupId;
  }
  Set_Groupidconform(id: string) {
    this.groupId = id;
    console.log(this.groupId);
    this.router.navigate(["/home/tabs/table/tabs/confirm-group-details"]);
  }
}
