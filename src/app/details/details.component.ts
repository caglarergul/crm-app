import {Component, OnInit} from '@angular/core';
import {Users} from './users';
import {UsersService} from "./users.service";
import {ActivatedRoute} from "@angular/router";

@Component({selector: 'app-details', templateUrl: './details.component.html', styleUrls: ['./details.component.css'], providers: [UsersService]})

export class DetailsComponent implements OnInit {

  userParamId;
  title = 'Users';
  users : Users[];
  constructor(private usersService : UsersService, private route : ActivatedRoute) {
    this
      .route
      .params
      .subscribe(params => this.userParamId = params);
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this
      .usersService
      .getUsers()
      .subscribe(res => {
        this.users = res
console.log(res)
      })
  }

}
