import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Users} from './users';
import {Observable} from 'rxjs';
import {ActivatedRoute} from "@angular/router";
@Injectable({providedIn: 'root'})
export class UsersService {
  userid;
  API_URL:string;
  constructor(private http : HttpClient, private route : ActivatedRoute) {
    this
      .route
      .params
      .subscribe(params => this.userid = params)
    console.log(this.userid)
    this.API_URL = "https://webtrekk-api.herokuapp.com/customer/"+this.userid.id;
    console.log(this.API_URL)
  }
  getUsers() : Observable < Users[] > {
return this.http.get < Users[] > (this.API_URL);
  }

}
