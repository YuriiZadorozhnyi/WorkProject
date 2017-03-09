import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BasketService {

    public basket: Array<any> = [];

    constructor(){}

    addToBasket(item){
        this.basket.push(item);
    }

    getFromBasket(){
        return this.basket;
    }

}