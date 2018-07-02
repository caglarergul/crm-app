import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DeleteService} from './delete.service';

@Component({selector: 'app-delete', templateUrl: './delete.component.html', styleUrls: ['./delete.component.css']})
export class DeleteComponent implements OnInit {
  userParamId;
  constructor(private deleteService : DeleteService, private route : ActivatedRoute) {
    this
      .route
      .params
      .subscribe(params => this.userParamId = params);
  }

  deleteCustomer() {
    this
      .deleteService
      .deleteCustomer(this.userParamId);
  }

  ngOnInit() {this.deleteCustomer();}

}
