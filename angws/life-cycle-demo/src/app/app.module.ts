import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LcDemo1Component } from './lc-demo1/lc-demo1.component';
import { LcDemo2Component } from './lc-demo2/lc-demo2.component';
import { HomeComponent } from './home/home.component';
import { ChildComponent } from './lc-demo1/child/child.component';
import { DemoChildComponent } from './lc-demo2/demo-child/demo-child.component';

@NgModule({
  declarations: [
    AppComponent,
    LcDemo1Component,
    LcDemo2Component,
    HomeComponent,
    ChildComponent,
    DemoChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
