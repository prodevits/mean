import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormDemo1Component } from './reactive-form-demo1/reactive-form-demo1.component';
import { ReactiveFormDemo2Component } from './reactive-form-demo2/reactive-form-demo2.component';
import { RfValDemo1Component } from './rf-val-demo1/rf-val-demo1.component';
import { RfValDemo2Component } from './rf-val-demo2/rf-val-demo2.component';
import { RfCustomValDemo1Component } from './rf-custom-val-demo1/rf-custom-val-demo1.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormDemo1Component,
    ReactiveFormDemo2Component,
    RfValDemo1Component,
    RfValDemo2Component,
    RfCustomValDemo1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
