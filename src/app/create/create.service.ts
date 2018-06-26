import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  constructor(private http: HttpClient) { }

  createCustomer(firstName, lastName, birthDay, gender, customerLifetimeValue) {
    const uri = 'https://webtrekk-api.herokuapp.com/customer';
    const obj = {
      name : {first: firstName, last: lastName},
      birthday: birthDay,
      gender: gender,
      customerLifetimeValue: customerLifetimeValue  
    };
    this.http.post(uri, obj)
        .subscribe(res => console.log('Done'));
  }

}
