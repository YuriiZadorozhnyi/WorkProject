import { Component } from '@angular/core';

import { BasketService } from '../../services/basket.service';

@Component({
  selector: 'app-cart',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {

    items: Array<any>;

    constructor(private basket: BasketService) { }

    ngOnInit() {

      let itemMap = {};
      
      this.basket.basketArr.forEach(el => {

        if (!itemMap[el.id]){

          itemMap[el.id] = {
            count: 1,
            product: el
          };

          return;
        }

      itemMap[el.id].count++;

      });
    
      this.items = [];

      for(var key in itemMap){
        if (!itemMap.hasOwnProperty( key )) {
          break;
        }
        this.items.push(itemMap[key]);

      }

      this.basket.basketArr = this.items.slice();  // rewrite basket array

    } // end ngOnInit 

}
