import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router/index';

import {ProductsService} from '../../services/production.service';
import { BasketService } from '../../services/basket.service';

import { CapitalizePipe } from "../../pipes/capitalize.pipe";

@Component({
    selector: 'product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent {

    public product: any;
    public id: number;

    constructor(
      public productsService: ProductsService, 
      private route: ActivatedRoute, 
      private basket: BasketService
    ) { }

    ngOnInit() {
        this.route.params
            .subscribe((params) => {
                this.productsService.getProduct(params['id']).then(data => this.product = data);
            });
    }

    addToBasket(item, event) {
        event.preventDefault();
        event.stopPropagation();
        this.basket.basketItems.push(item);
    }


}
