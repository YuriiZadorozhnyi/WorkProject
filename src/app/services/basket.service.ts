import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BasketService {
    constructor(){}
    
    public basket: Array<any> = [];

    public testMessage = "Hello World !!!";



    addToBasket(item) {
        this.basket.push(item);
    }

    getFromBasket(){
        return this.addToBasket(this);
    }

}