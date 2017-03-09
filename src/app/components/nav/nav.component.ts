import { Component, OnInit } from '@angular/core';

import { CategoryService } from '../../services/category.service';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  categories: Array<any> = [];
  products: Array<any> = [];
  title: String;

  constructor (
  private categoryService : CategoryService,
  private filtering : FilterService,
    ) {}

  // menu products toggle with list of categories
  productStatusTogle: Boolean = false;
  filterStatusTogle: Boolean = false;

  prodToggle() {
    this.productStatusTogle = !this.productStatusTogle;
  }
  filtToggle() {
    this.filterStatusTogle = !this.filterStatusTogle;
  }

  ngOnInit() {
    this.categoryService.getCategories()
        .subscribe(data => {
          this.categories = data;
        });
  }

}
