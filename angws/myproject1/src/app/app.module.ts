import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmpComponent } from './emp/emp.component';
import { StuComponent } from './stu/stu.component';
import { Practice2Component } from './practice2/practice2.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { StrDirsComponent } from './str-dirs/str-dirs.component';
import { Practice3Component } from './practice3/practice3.component';
import { Practice4Component } from './practice4/practice4.component';
import { PipeDemosComponent } from './pipe-demos/pipe-demos.component';
import {GradePipe} from './pipe-demos/grade.pipe';
import { NameTitlePipe } from './pipe-demos/name-title.pipe';
import { BonusPipe } from './pipe-demos/bonus.pipe';
import { PipeDemos1Component } from './pipe-demos1/pipe-demos1.component';
import { NameFilterPipe } from './pipe-demos1/name-filter.pipe';
import { SortPipe } from './pipe-demos1/sort.pipe';
import {HelloPipe} from './pipe-demos/hello.pipe';
import { MaxPipe } from './pipe-demos1/max.pipe';
import { Practice5Component } from './practice5/practice5.component';
import { SearchPipe } from './practice5/search.pipe';
import { SortByPipe } from './practice5/sort-by.pipe';
import { SalaryFilterPipe } from './practice5/salary-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmpComponent,
    StuComponent,
    Practice2Component,
    TwoWayBindingComponent,
    StrDirsComponent,
    Practice3Component,
    Practice4Component,
    PipeDemosComponent,
    GradePipe,
    NameTitlePipe,
    BonusPipe,
    PipeDemos1Component,
    NameFilterPipe,
    SortPipe,
    HelloPipe,
    MaxPipe,
    Practice5Component,
    SearchPipe,
    SortByPipe,
    SalaryFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
