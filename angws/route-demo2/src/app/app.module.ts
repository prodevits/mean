import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { EmpComponent } from './emp/emp.component';
import { DeptComponent } from './dept/dept.component';
import { IndianStatesComponent } from './indian-states/indian-states.component';
import { StatesCapitalComponent } from './states-capital/states-capital.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddIndianStateComponent } from './add-indian-state/add-indian-state.component'


@NgModule({
  declarations: [
    AppComponent,
	HomeComponent,
    AccountComponent,
    EmpComponent,
    DeptComponent,
    IndianStatesComponent,
    StatesCapitalComponent,
    NotFoundComponent,
    AddIndianStateComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
