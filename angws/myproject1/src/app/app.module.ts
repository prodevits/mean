import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmpComponent } from './emp/emp.component';
import { StuComponent } from './stu/stu.component';
import { Practice2Component } from './practice2/practice2.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { StrDirsComponent } from './str-dirs/str-dirs.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpComponent,
    StuComponent,
    Practice2Component,
    TwoWayBindingComponent,
    StrDirsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
