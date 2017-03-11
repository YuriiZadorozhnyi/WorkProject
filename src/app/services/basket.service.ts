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

    totalSum() {
        var sum = 0;
        for(var i = 1; i < this.basketItems.length; i++) {
            if(this.basketItems[i] != undefined) {
                sum += this.basketItems[i].product.price * this.basketItems[i].count;
            } else {
                continue;
            }
        }
        return sum;
    }

}