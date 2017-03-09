import { Component } from '@angular/core';

import { ProductsService } from '../../services/production.service';
import { BasketService } from '../../services/basket.service';
import { FilterService } from '../../services/filter.service';

import { CapitalizePipe } from "../../pipes/capitalize.pipe";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['../products/products.component.css']
})
export class FilterComponent {

  public products: Array<any> = [];

  constructor(
      public productsService: ProductsService, 
      private basket: BasketService,
      private filter: FilterService
  ){}

  ngOnInit() {
    this.productsService.getProducts()
      .subscribe(data => {
        this.products = data;
      });
  }

      addToBasket(item, event) {
        event.preventDefault();
        event.stopPropagation();
        this.basket.basketArr.push(item);
        console.log(this.basket.basketArr);
    }

}
