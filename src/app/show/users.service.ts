import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>('https://webtrekk-api.herokuapp.com/customers');
  }

}
