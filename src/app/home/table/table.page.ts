import { TableService } from "./service/table/table.service";
import { DatePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-table",
  templateUrl: "./table.page.html",
  styleUrls: ["./table.page.scss"],
})
export class TablePage implements OnInit {
  constructor(private date: DatePipe, private service: TableService) {}
  week: number[] = [];
  ngOnInit() {
    for (let i = 0; i < 7; i++) {
      let today = new Date();
      let data = today.setDate(today.getDate() + i);
      this.week.push(data);
    }
  }
  selectedday(day: string) {
    this.service.setday_date(
      this.date.transform(day, "EEEE"),
      this.date.transform(day, "yyyy-MM-dd")
    );
  }
}
