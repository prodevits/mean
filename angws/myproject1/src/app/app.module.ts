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
import {Explevel} from './pipe-demos/explevel.pipe';
import { CustomDir1Component } from './custom-dir1/custom-dir1.component';
import { MyDirDirective } from './custom-dir1/my-dir.directive';
import { HideDirective } from './custom-dir1/hide.directive';
import { ViewChildDemoComponent } from './view-child-demo/view-child-demo.component';
import { ViewChildDemo1Component } from './view-child-demo1/view-child-demo1.component';
import { ChildComponentDemo1Component } from './child-component-demo1/child-component-demo1.component';
import { StudentComponent } from './child-component-demo1/student/student.component';
import { ChildComponentPractice1Component } from './child-component-practice1/child-component-practice1.component';
import { ItemComponent } from './child-component-practice1/item/item.component';
import { StyleDemoComponent } from './style-demo/style-demo.component';
import { ClassDemoComponent } from './class-demo/class-demo.component';
import { ChildComponentDemo2Component } from './child-component-demo2/child-component-demo2.component';
import { MessageComponent } from './child-component-demo2/message/message.component';
import { ChildComponentPractice2Component } from './child-component-practice2/child-component-practice2.component';
import { AddPersonComponent } from './child-component-practice2/add-person/add-person.component';
import { ShowPersonComponent } from './child-component-practice2/show-person/show-person.component';
import { TimerDirective } from './custom-dir1/timer.directive';
import { ServiceDemo1Component } from './service-demo1/service-demo1.component';
import { ShowProductComponent } from './service-demo1/show-product/show-product.component';
import { AddProductComponent } from './service-demo1/add-product/add-product.component';
import { ServiceDemo2Component } from './service-demo2/service-demo2.component';

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
    SalaryFilterPipe,
    Explevel,
    CustomDir1Component,
    MyDirDirective,
    HideDirective,
    ViewChildDemoComponent,
    ViewChildDemo1Component,
    ChildComponentDemo1Component,
    StudentComponent,
    ChildComponentPractice1Component,
    ItemComponent,
    StyleDemoComponent,
    ClassDemoComponent,
    ChildComponentDemo2Component,
    MessageComponent,
    ChildComponentPractice2Component,
    AddPersonComponent,
    ShowPersonComponent,
    TimerDirective,
    ServiceDemo1Component,
    ShowProductComponent,
    AddProductComponent,
    ServiceDemo2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
