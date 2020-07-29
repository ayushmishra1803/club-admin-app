import { TableService } from './../../../service/table/table.service';
import { AuthService } from './../../../../../service/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.page.html',
  styleUrls: ['./group-details.page.scss'],
})
export class GroupDetailsPage implements OnInit {

  constructor(private auth:AuthService,private service:TableService) { }

  group_id:string
  private token:string
  ngOnInit() {
    this.group_id=this.service.get_Groupid();
    this.token=this.auth.getToken();
  }

}
