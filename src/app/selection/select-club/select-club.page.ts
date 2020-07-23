import { AuthService } from './../../service/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-club',
  templateUrl: './select-club.page.html',
  styleUrls: ['./select-club.page.scss'],
})
export class SelectClubPage implements OnInit {

  constructor(private auth:AuthService) { }
  city:string

  ngOnInit() {
    this.city=this.auth.getcity();
    console.log(this.city);
    
  }

}
