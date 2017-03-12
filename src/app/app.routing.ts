import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatComponent } from './components/cat/cat.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { BasketComponent } from './components/basket/basket.component';

const appRoutes: Routes = [
    {
        path: 'home',
        component: CatComponent 
    },
    {
        path: 'production/:id',
        component: ProductsComponent
    },
    {
        path: 'product/:id',
        component: ProductComponent
    },
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: 'basket',
        component: BasketComponent 
    }, 
    {
        path: 'filter',
        component: ProductsComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);