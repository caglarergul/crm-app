import { Component, OnInit } from '@angular/core';
import {Users} from './users';
import {UsersService} from "./users.service";
import {DeleteService} from '../delete/delete.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
  providers: [UsersService]
})
export class ShowComponent implements OnInit {

title = 'Users';
users : Users[];
constructor(private usersService : UsersService,private deleteService : DeleteService, private route : ActivatedRoute) {}

ngOnInit() {
  this.getUsers();
}
deleteCustomer(id) {
  
  this
    .deleteService
    .deleteCustomer(id);
}
getUsers() {
  this
    .usersService
    .getUsers()
    .subscribe(res => {
      this.users = res
    })
}

}
