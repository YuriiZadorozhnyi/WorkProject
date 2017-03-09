import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { CatComponent } from './components/cat/cat.component';
import { DetComponent } from './components/det/det.component';
import { BasketComponent } from './components/basket/basket.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { ProdComponent } from './components/prod/prod.component';
import { FilterComponent } from './components/filter/filter.component';

import { CategoryService } from './services/category.service';
import { ProductsService } from './services/production.service';
import { BasketService } from './services/basket.service';

import { FilterManufacturerPipe } from './pipes/filter-manufacturer.pipe';
import { FilterMinPricePipe } from './pipes/filter-min-price.pipe';
import { FilterMaxPricePipe } from './pipes/filter-max-price.pipe';
import { CapitalizePipe } from "./pipes/capitalize.pipe";

import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CatComponent,
    ProductComponent,
    ProductsComponent,
    ProdComponent,
    DetComponent,
    BasketComponent,
    FilterComponent,
    FilterManufacturerPipe,
    FilterMinPricePipe,
    FilterMaxPricePipe,
    CapitalizePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    CategoryService,
    ProductsService, 
    BasketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
