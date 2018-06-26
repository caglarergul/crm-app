import { Component, OnInit } from '@angular/core';
import {Users} from './users';
import {UsersService} from "./users.service";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
  providers: [UsersService]
})
export class ShowComponent implements OnInit {

title = 'Users';
users : Users[];
constructor(private usersService : UsersService) {}

ngOnInit() {
  this.getUsers();
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
