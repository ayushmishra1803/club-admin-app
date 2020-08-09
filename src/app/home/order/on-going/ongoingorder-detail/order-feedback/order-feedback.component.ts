import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-order-feedback",
  templateUrl: "./order-feedback.component.html",
  styleUrls: ["./order-feedback.component.scss"],
})
export class OrderFeedbackComponent implements OnInit {
  constructor(private model: ModalController) {}
  rating: number = 0;
  ngOnInit() {}
  onsubmit() {
    console.log(this.rating);

    console.log("Hello");
    this.model.dismiss({message:"Success"},"success")
  }
}
