import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { CatComponent } from './components/cat/cat.component';
import { ProductsComponent } from './components/products/products.component';
import { DetComponent } from './components/det/det.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';

import { CategoryService } from './services/category.service';
import { ProductsService } from './services/production.service';

import { FilterManufacturerPipe } from './pipes/filter-manufacturer.pipe';
import { FilterMinPricePipe } from './pipes/filter-min-price.pipe';
import { FilterMaxPricePipe } from './pipes/filter-max-price.pipe';


import { routing } from './app.routing';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CatComponent,
    ProductComponent,
    ProductsComponent,
    DetComponent,
    CartComponent,
    FilterComponent,
    FilterManufacturerPipe,
    FilterMinPricePipe,
    FilterMaxPricePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [
    CategoryService,
    ProductsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
