import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class OrderdetailsService {
  orderId: string;
  createOrderID: string;
  completed:boolean;
  constructor(private router: Router) {}
  setOrderId(id: string,completed:boolean) {
    this.completed=completed
    this.orderId = id;
    console.log(id);
    
  }
  getOrderId() {
    return this.orderId;
  }
  getiscompleted(){
    return this.completed
  }
  setcreateorderId(id: string) {
    this.createOrderID = id;
    console.log(id);
    
  }
  getcreateorderId(){
    console.log(this.createOrderID);
    
   return this.createOrderID
  
   
  }
}
