import { DatePipe } from '@angular/common';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-table",
  templateUrl: "./table.page.html",
  styleUrls: ["./table.page.scss"],
})
export class TablePage implements OnInit {
  constructor(private date:DatePipe) {}
  week: number[] = [];
  ngOnInit() {
    for (let i = 0; i < 7; i++) {
      let today = new Date();
      let data = today.setDate(today.getDate() + i);
      this.week.push(data);
    }
  }
  selectedday(day: string){
    console.log(this.date.transform(day,"EEEE"));
    
  }
}
