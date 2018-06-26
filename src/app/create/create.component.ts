import { Component, OnInit } from '@angular/core';
import { CreateService } from './create.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  
  constructor(private createservice: CreateService) {
   
  }
 
  createCustomer(firstName, lastName, birthDay, gender, customerLifetimeValue) {
      this.createservice.createCustomer(firstName, lastName, birthDay, gender, customerLifetimeValue);
  }

  clickMe(firstName, lastName, birthDay, gender, customerLifetimeValue) 
  {
    console.log("clicked" + firstName, lastName, birthDay, gender, customerLifetimeValue);
  }
  ngOnInit() {
  }
}
