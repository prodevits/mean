import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ShowProductComponent } from './products/show-product/show-product.component';
import { HttpClientModule } from '@angular/common/http';
import { RemoveProductComponent } from './remove-product/remove-product.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AddProductComponent,
    ShowProductComponent,
    RemoveProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
