import { Injectable } from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BasketService {
    
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