import { Component, OnInit } from '@angular/core';

import { CategoryService } from '../../services/category.service';

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


  // get categories from CategoryService
  categories: Array<any> = [];

  constructor (private categoryService : CategoryService) {}

  ngOnInit() {
    this.categoryService.getCategories()
        .subscribe(data => {
          this.categories = data;
        });
  }

}
