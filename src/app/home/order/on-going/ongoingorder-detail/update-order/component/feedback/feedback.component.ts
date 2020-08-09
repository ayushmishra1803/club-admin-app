import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-feedback",
  templateUrl: "./feedback.component.html",
  styleUrls: ["./feedback.component.scss"],
})
export class FeedbackComponent implements OnInit {
  constructor(private model: ModalController) {}

  ngOnInit() {}
  submit() {
    console.log("Success");
    this.model.dismiss(
      {
        message: "Dissmiss",
      },
      "success"
    );
  }
}
