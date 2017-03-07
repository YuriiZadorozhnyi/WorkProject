import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { CatComponent } from './components/cat/cat.component';
import { ProdComponent } from './components/prod/prod.component';
import { DetComponent } from './components/det/det.component';
import { CartComponent } from './components/cart/cart.component';

import { routing } from './app.routing';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CatComponent,
    ProdComponent,
    DetComponent,
    CartComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
