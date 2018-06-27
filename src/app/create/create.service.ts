import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class CreateService {
lastContactTime = moment().format("YYYY-MM-DD");
  constructor(private http: HttpClient) { }

  createCustomer(firstName, lastName, birthDay, gender, customerLifetimeValue) {
    const uri = 'https://webtrekk-api.herokuapp.com/customer';
    const obj = {
      firstname: firstName,
      lastname: lastName,
      birthday: moment(birthDay).format("YYYY-MM-DD"),
      gender: gender,
      customerLifetimeValue: parseFloat(customerLifetimeValue),
      lastContact : this.lastContactTime
    };

    

    this.http.post(uri, obj).subscribe(res => console.log(res));
  }

}
