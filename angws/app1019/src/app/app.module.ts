import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Route} from '@angular/router'
import { AppComponent } from './app.component';
import { EmpComponent } from './emp/emp.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StudentComponent } from './students/student/student.component';
import { StudentsComponent } from './students/students.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonInfoComponent } from './person-list/person-info/person-info.component';
import { PersonEntryComponent } from './person-list/person-entry/person-entry.component';
import { NumberOprComponent } from './number-opr/number-opr.component'
import {HttpClientModule} from '@angular/common/http';
import { EmpHttpComponent } from './emp-http/emp-http.component';
import { MyDirective } from './custom/my.directive';
import { SortPipe } from './sort.pipe';
import { NamefilterPipe } from './custom/namefilter.pipe';
import { SalaryFilterPipe } from './custom/salary-filter.pipe';
import { OrderByPipe } from './custom/order-by.pipe';
import { ItemListComponent } from './item-list/item-list.component';
import { PipesDemosComponent } from './pipes-demos/pipes-demos.component';
import { ServiceDemosComponent } from './service-demos/service-demos.component';
import { AddPersonComponent } from './service-demos/add-person/add-person.component';
import { ShowPersonComponent } from './service-demos/show-person/show-person.component';
import { SpringDemoComponent } from './spring-demo/spring-demo.component';
import { TdFormComponent } from './td-form/td-form.component';
import { LifeDemoComponent } from './life-demo/life-demo.component';
import { ChildComponent } from './life-demo/child/child.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import {ConfirmPassValidatorDirective} from './custom/confirm-pass-validator.directive'
import { MatchValidator } from './custom/match-validator';
import { ValidateUnameValidator } from './custom/validate-uname-validator.directive';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFbDemoComponent } from './reactive-fb-demo/reactive-fb-demo.component';
import { StyleClassDemoComponent } from './style-class-demo/style-class-demo.component';
import { ServiceDemo1Component } from './service-demo1/service-demo1.component';
import { ServiceDemo2Component } from './service-demo2/service-demo2.component';
import { ServiceEventComponent } from './service-event/service-event.component';
import { ServiceDemo3Component } from './service-demo3/service-demo3.component';
import { ShowItemComponent } from './service-demo3/show-item/show-item.component';
import { AddItemComponent } from './service-demo3/add-item/add-item.component';
import { HideDirective } from './custom/hide.directive';
import { RangeValidator } from './custom/range.validator';
import { NgClassDemoComponent } from './ng-class-demo/ng-class-demo.component';
import { AttrDirDemoComponent } from './attr-dir-demo/attr-dir-demo.component';
import { StrDirDemoComponent } from './str-dir-demo/str-dir-demo.component';
import { MyLoopDirective } from './custom/myloop.directive';
import { ServiceBasicComponent } from './service-basic/service-basic.component';
import { BasicService } from './service/basic.service';
import { SecondService } from './custom/second.service';
import { MousefnDirective } from './custom/mousefn.directive';
import { RoutingDemos1Component } from './routing-demos1/routing-demos1.component';
import { RoutingDemos2Component } from './routing-demos2/routing-demos2.component';
import { AddEmpComponent } from './emp-http/add-emp/add-emp.component';
import { ObsDemoComponent } from './obs-demo/obs-demo.component';
import { StyleDemoComponent } from './style-demo/style-demo.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import {GradePipe} from './pipe-demo/grade-pipe'
import { TitleNamePipe } from './pipe-demo/title-name-pipe';
import { SortByPipe } from './pipe-demo/sortby.pipe';
import { ServiceLocalDemoComponent } from './service-local-demo/service-local-demo.component';
import { AddMessageComponent } from './service-local-demo/add-message/add-message.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TdForm1Component } from './td-form1/td-form1.component';
const appRoutes=[
    // {path: '',redirectTo: 'home',pathMatch: 'full'},
    {path: '',component:MainPageComponent,pathMatch: 'full'},
    {path:'home',component:EmpComponent},
    {path:'empHttp',component:EmpHttpComponent},
    {path:'numOpr',component:NumberOprComponent},
    {path:'person',component:PersonListComponent},
    {path:'serviceDemo',component:ServiceDemosComponent},
    {path:'student',component:StudentsComponent},
    {path:'pipeDemos',component:PipesDemosComponent},
    {path:'pipeDemo',component:PipeDemoComponent},
    {path:'products',component:SpringDemoComponent},
    {path:'tdfDemo',component:TdFormComponent},
    {path:'tdfDemo1',component:TdForm1Component},
    {path:'lcDemo',component:LifeDemoComponent},
    {path:'personDetails',component:PersonDetailsComponent},
    {path:'reactiveForm',component:ReactiveFormComponent },
    {path:'fbReactiveForm',component:ReactiveFbDemoComponent },
    {path:'styleClass',component: StyleClassDemoComponent },
    {path:'service1',component: ServiceDemo1Component },
    {path:'service2',component: ServiceDemo2Component },
    {path:'service3',component: ServiceDemo3Component },
    {path:'ngclassd',component: NgClassDemoComponent },
    {path:'styled',component: StyleDemoComponent },
    {path:'attrDir',component: AttrDirDemoComponent },
    {path:'strDir',component: StrDirDemoComponent },
    {path:'basicService',component: ServiceBasicComponent},
    {path:'obs',component: ObsDemoComponent},
    {path:'routeDemo',component: RoutingDemos1Component},
    {path:'routeParam/:id',component: RoutingDemos2Component},
    {path:'routeParam/:id/:nm',component: RoutingDemos2Component},
    {path:'lsdemo',component: ServiceLocalDemoComponent},
    {path:'demo',component: TdFormComponent, outlet:'o1'},
   
    // {path:'', component: EmpComponent} 
   
    {path:'**',component:PageNotFoundComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    EmpComponent,
    StudentComponent,
    StudentsComponent,
    PersonListComponent,
    PersonInfoComponent,
    PersonEntryComponent,
    NumberOprComponent,
    EmpHttpComponent,
    MyDirective,
    HideDirective,
    MyLoopDirective,
    SortPipe,
    NamefilterPipe,
    SalaryFilterPipe,
    OrderByPipe,
    ItemListComponent,
    PipesDemosComponent,
    ServiceDemosComponent,
    AddPersonComponent,
    ShowPersonComponent,
    SpringDemoComponent,
    TdFormComponent,
    LifeDemoComponent,
    ChildComponent,
    PersonDetailsComponent,
    ConfirmPassValidatorDirective,
    MatchValidator,
    ValidateUnameValidator,
    ReactiveFormComponent,
    ReactiveFbDemoComponent,
    StyleClassDemoComponent,
    ServiceDemo1Component,
    ServiceDemo2Component,
    ServiceEventComponent,
    ServiceDemo3Component,
    ShowItemComponent,
    AddItemComponent,
    RangeValidator,
    NgClassDemoComponent,
    AttrDirDemoComponent,
    StrDirDemoComponent,
    ServiceBasicComponent,
    MousefnDirective,
    RoutingDemos1Component,
    RoutingDemos2Component,
    AddEmpComponent,
    ObsDemoComponent,
    StyleDemoComponent,
    PipeDemoComponent,
    GradePipe,
    TitleNamePipe,
    SortByPipe,
    ServiceLocalDemoComponent,
    AddMessageComponent,
    PageNotFoundComponent,
    MainPageComponent,
    TdForm1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BasicService,SecondService],
  bootstrap: [AppComponent]
})
export class AppModule { }
