import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { EmpComponent } from './emp/emp.component';
import { DeptComponent } from './dept/dept.component';

import {RouterModule} from '@angular/router';
import { IndianStatesComponent } from './indian-states/indian-states.component';
import { StatesCapitalComponent } from './states-capital/states-capital.component';
import { NotFoundComponent } from './not-found/not-found.component'

const routes=[
  {path:'home',component:HomeComponent},
  {path:'emp',component:EmpComponent},
  {path:'dept',component:DeptComponent},
  {path:'states',component:IndianStatesComponent},  
  {path:'capital/:code',component:StatesCapitalComponent},   
  {path:'',redirectTo:'home', pathMatch:"full"} ,
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountComponent,
    EmpComponent,
    DeptComponent,
    IndianStatesComponent,
    StatesCapitalComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
