import { Component, OnInit } from '@angular/core';

import { MyService } from '../../services/my.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  // menu products toggle with list of categories
  productStatusTogle: Boolean = false;
  filterStatusTogle: Boolean = false;

  prodToggle() {
    this.productStatusTogle = !this.productStatusTogle;
  }
  filtToggle() {
    this.filterStatusTogle = !this.filterStatusTogle;
  }

  // get categories from MyService
  categories = [];

  constructor (private serv : MyService) {}

  ngOnInit() {
    this.categories = this.serv.categories;
  }

}
