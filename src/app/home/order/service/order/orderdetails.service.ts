import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class OrderdetailsService {
  orderId: string;
  createOrderID: string;
  constructor(private router: Router) {}
  setOrderId(id: string) {
    this.orderId = id;
    console.log(id);
    
  }
  getOrderId() {
    return this.orderId;
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
