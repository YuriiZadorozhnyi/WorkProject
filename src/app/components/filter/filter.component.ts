import { Component } from '@angular/core';

import { ProductsService } from '../../services/production.service';
import { BasketService } from '../../services/basket.service';
import { FilterService } from '../../services/filter.service';

import { CapitalizePipe } from "../../pipes/capitalize.pipe";

import { ProductTemplate } from '../../types/product-template.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  public products: Array<ProductTemplate> = [];

  constructor(
      public productsService: ProductsService, 
      private basket: BasketService,
      private filtering: FilterService
  ){}

  ngOnInit() {
    this.productsService.getProducts()
      .subscribe(data => {
        this.products = data;
      });
  }

  addToBasket(item : ProductTemplate) {
    this.basket.addItem(item);
  }

}