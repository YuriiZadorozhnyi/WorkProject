import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatComponent } from './components/cat/cat.component';
import { ProdComponent } from './components/prod/prod.component';
import { DetComponent } from './components/det/det.component';
import { CartComponent } from './components/cart/cart.component';

const appRoutes: Routes = [
    {
        path: '',
        component: CatComponent 
    },
    {
        path: 'production',
        component: ProdComponent
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