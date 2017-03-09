import { Component, Input, Output, EventEmitter } from '@angular/core';

import { CapitalizePipe } from "../../pipes/capitalize.pipe";

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {

  @Input() product;
  @Output() addToCart = new EventEmitter();

  addToBasket($event) {
    event.preventDefault();
    event.stopPropagation();
    this.addToCart.next();
  }

}
