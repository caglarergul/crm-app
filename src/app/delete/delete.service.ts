import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {
  lastContactTime = moment().format("YYYY-MM-DD");
  constructor(private http: HttpClient) { }
userid;
  deleteCustomer(_id) {
    this.userid = _id;
    const uri = 'https://webtrekk-api.herokuapp.com/customer/'+this.userid;
    
    
    this.http.delete(uri).subscribe(res => console.log(res.toString) , (err) => {
      console.log(err);
  });

  setTimeout(function(){ alert("Successfully Deleted!");window.location.assign("/show")}, 1000) 
   
  }
}
