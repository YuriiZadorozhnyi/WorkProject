import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductsService {

    public products: Array<any> = [];

    constructor(public http: Http) {}

    getProducts(): Observable<any[]> {
        return this.http.get('/json/products.json')
            .map(response => response.json())
    }

    getProduct(id): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get('/json/products.json')
                .map(response => response.json())
                .subscribe(data => {
                    let result = data.filter(el => el.id == id);
                    resolve(result[0]);
                }, () => {
                    reject();
                });
        });
    }



}