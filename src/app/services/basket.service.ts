import { Injectable } from '@angular/core';

@Injectable()
export class BasketService {

    basketItems: any = [];

    getItems() {
        let basketItems = [];
        for (var k in this.basketItems){
            if (!this.basketItems.hasOwnProperty(k)) {
                return;
            }
            basketItems.push(this.basketItems[k]);
        }
        return basketItems;
    }

    addItem(item) {
        event.preventDefault();                // check this again after modify prod.component view
        event.stopPropagation();               // check this again after modify prod.component view
        let el = this.basketItems[item.id];
        if (el) {
            el.count++;
            return;
        }
        this.basketItems[item.id] = {
            product: item,
            count: 1
        };
    }

    removeItem(item) {
        delete this.basketItems[item.id];
    }

}