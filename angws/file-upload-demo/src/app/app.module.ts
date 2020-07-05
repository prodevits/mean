import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegComponent } from './reg/reg.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { UsersComponent } from './users/users.component';
import { RegPhotoWithEventComponent } from './reg-photo-with-event/reg-photo-with-event.component';
import { Reg2Component } from './reg2/reg2.component';
import { Reg3ValComponent } from './reg3-val/reg3-val.component';


@NgModule({
  declarations: [
    AppComponent,
    RegComponent,
    UsersComponent,
    RegPhotoWithEventComponent,
    Reg2Component,
    Reg3ValComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
