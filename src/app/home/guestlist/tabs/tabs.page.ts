import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.page.html",
  styleUrls: ["./tabs.page.scss"],
})
export class TabsPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  mode = ["request", "confirmed"];
  selectedday(type:string){
    this.router.navigate([`/home/tabs/guestlist/tabs/${type}`]);
  }
}
