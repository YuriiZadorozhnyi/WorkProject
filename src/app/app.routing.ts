import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatComponent } from './components/cat/cat.component';
import { ProdComponent } from './components/prod/prod.component';

const appRoutes: Routes = [
    {
        path: 'home',
        component: CatComponent 
    },
    {
        path: 'production',
        component: ProdComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); 