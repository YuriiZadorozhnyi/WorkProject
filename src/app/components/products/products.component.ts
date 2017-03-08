import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router/index';

import { ProductsService } from '../../services/production.service';

import { CapitalizePipe } from "../../pipes/capitalize.pipe";

@Component({
  selector: 'app-prod',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {

  public products: Array<any> = [];

  constructor(public productsService: ProductsService, private route: ActivatedRoute){}

  ngOnInit() {
      this.route.params
          .subscribe((params) => {
              this.productsService.getProducts()
                  .subscribe(data => {
                      this.products = data.filter(el => el.category == params['id']);
                  });
          })

  }
 
}