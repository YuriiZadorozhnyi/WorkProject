import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { CatComponent } from './components/cat/cat.component';
import { BasketComponent } from './components/basket/basket.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { FilterComponent } from './components/filter/filter.component';
import { ProductItemComponent } from './components/product-item/product-item.component';

import { CategoryService } from './services/category.service';
import { ProductsService } from './services/production.service';
import { BasketService } from './services/basket.service';
import { FilterService } from './services/filter.service';

import { FilterManufacturerPipe } from './pipes/filter-manufacturer.pipe';
import { FilterTitlePipe } from './pipes/filter-title.pipe';
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
    BasketComponent,
    FilterComponent,
    FilterManufacturerPipe,
    FilterTitlePipe,
    FilterMinPricePipe,
    FilterMaxPricePipe,
    CapitalizePipe,
    ProductItemComponent
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
    BasketService,
    FilterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
