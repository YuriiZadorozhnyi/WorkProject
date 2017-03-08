import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatComponent } from './components/cat/cat.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { DetComponent } from './components/det/det.component';
import { CartComponent } from './components/cart/cart.component';

const appRoutes: Routes = [
    {
        path: '',
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
        path: 'details',
        component: DetComponent 
    },
    {
        path: 'cart',
        component: CartComponent 
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);