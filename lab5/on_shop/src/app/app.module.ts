import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import {ProductItemComponent} from "./product-item/product-item.component";
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [
    
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forRoot([
      {path: 'products/:category', component: ProductListComponent},
      {path: 'products/:category/:id', component: ProductItemComponent},
    ]),

  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductItemComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
