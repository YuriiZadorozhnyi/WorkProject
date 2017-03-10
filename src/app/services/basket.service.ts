import { Injectable } from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BasketService {

basketItems: any;

   constructor(){
      this.basketItems = new Map();
   }

  getItems(){
        let basketItems = [];
        for (var [key, value] of this.basketItems) {
          basketItems.push({
            count: value,
            product: key
          });
        }
        return basketItems;
  }

   addItem(item){
         let count = this.basketItems.get(item);
         if (count){
            this.basketItems.set(item, ++count);
             return;
         }
         this.basketItems.set(item, 1);
   }

   removeItem(item){
        this.basketItems.delete(item);
   }

}


/*  ************************** NEWER METHOD  ***************************************
   constructor(){
      this.basketItems = new Map();
   }

  getItems(){
        let basketItems = [];
        for (var [key, value] of this.basketItems) {
          basketItems.push({
            count: value,
            product: key
          });
        }
        return this.basketItems;
  }

   addItem(item){
         let count = this.basketItems.get(item);
         if (count){
            this.basketItems.set(item, ++count);
             return;
         }
         this.basketItems.set(item, 1);
   }

   removeItem(item){
        this.basketItems.delete(item);
   }



}

****************** OLD METHOD ****************************


    public basketArr: Array<any> = [];

    addItem(item) {
        this.basketArr.push(item);
    }

    removeItem(item) {
        let index = this.basketArr.indexOf(item);
        if (index > -1) {
            this.basketArr.splice(index, 1);
        }
    }

}
*/