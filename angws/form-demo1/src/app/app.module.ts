import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TdfDemo1Component } from './tdf-demo1/tdf-demo1.component';
import { TdfDemo2Component } from './tdf-demo2/tdf-demo2.component';
import { TdfVal1Component } from './tdf-val1/tdf-val1.component';
import { TdfVal2Component } from './tdf-val2/tdf-val2.component';
import { TdfVal3Component } from './tdf-val3/tdf-val3.component';
import { FucaseValidator } from './validators/fucase.validator';
import { TdfVal1BsComponent } from './tdf-val1-bs/tdf-val1-bs.component';
import { TdfVal2BsComponent } from './tdf-val2-bs/tdf-val2-bs.component';

@NgModule({
  declarations: [
    AppComponent,
    TdfDemo1Component,
    TdfDemo2Component,
    TdfVal1Component,
    TdfVal2Component,
    TdfVal3Component,
    FucaseValidator,
    TdfVal1BsComponent,
    TdfVal2BsComponent
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
