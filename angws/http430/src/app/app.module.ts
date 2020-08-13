import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { StatesComponent } from './states/states.component';
import { CitiesComponent } from './cities/cities.component';
import { StateCityComponent } from './state-city/state-city.component';
import { EmpsComponent } from './emps/emps.component';

@NgModule({
  declarations: [
    AppComponent,
    StatesComponent,
    CitiesComponent,
    StateCityComponent,
    EmpsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
