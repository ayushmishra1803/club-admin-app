import { AuthService } from './../../../../../service/auth/auth.service';
import { OrderdetailsService } from "./../../../service/order/orderdetails.service";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { ModalController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-order-feedback",
  templateUrl: "./order-feedback.component.html",
  styleUrls: ["./order-feedback.component.scss"],
})
export class OrderFeedbackComponent implements OnInit {
  constructor(
    private model: ModalController,
    private http: HttpClient,
    private service: OrderdetailsService,
    private auth:AuthService
  ) {}
  rating: string ;
  ngOnInit() {}
  onsubmit() {
    let orderId=this.service.getGroupId().trim();
   console.log(orderId);
   
    const data = {
      rating:parseFloat(this.rating),
    };

   console.log(data);
    //  console.log("Hello");
    //  this.model.dismiss({ message: "Success" }, "success");
    let token =this.auth.getToken()
    let header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
   
   this.http.put(
     `https://4obg8v558d.execute-api.ap-south-1.amazonaws.com/dev/addrating/${orderId}`,data,{headers:header}
   ).subscribe(re=>{
     console.log(re);
     console.log(this.rating);

     console.log("Hello");
     this.model.dismiss({ message: "Success" }, "success");
   });
    
  }
}
