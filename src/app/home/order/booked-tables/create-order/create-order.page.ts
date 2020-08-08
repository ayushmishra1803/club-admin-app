import { create } from './interface/create';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-create-order",
  templateUrl: "./create-order.page.html",
  styleUrls: ["./create-order.page.scss"],
})
export class CreateOrderPage implements OnInit {
  constructor() {}
  quantity: number;
  name: string;
  items: create[] = [];
  ngOnInit() {}
  Add() {
    console.log(this.name);

    console.log(this.quantity);
    this.items.push({ item: this.name, quantity: this.quantity });
    console.log(this.items);
  }
  submit(){
    
  }
}
