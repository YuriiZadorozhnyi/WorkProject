import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router/index';

import { ProductsService } from '../../services/production.service';
import { BasketService } from '../../services/basket.service';
import { FilterService } from '../../services/filter.service';

import { CapitalizePipe } from "../../pipes/capitalize.pipe";

@Component({
  selector: 'app-prod',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {

  public products: Array<any> = [];

  constructor(
      public productsService: ProductsService, 
      private route: ActivatedRoute, 
      private basket: BasketService,
      private filtering: FilterService
  ) { }

  ngOnInit() {
    var idParametr: Number = undefined;

      this.route.params
          .subscribe((params) => {
              this.productsService.getProducts()
                  .subscribe(data => {
                      this.products = data.filter(el => el.category == params['id']);
                      idParametr = params['id'];

                        if (idParametr === undefined) {
                            this.productsService.getProducts()
                            .subscribe(data => {
                                this.products = data;
                            });
                        }

                })
        });

  }

  addToBasket(item) {
    this.basket.addItem(item);
  }
 
}
