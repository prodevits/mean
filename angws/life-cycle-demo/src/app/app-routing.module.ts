import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LcDemo1Component } from './lc-demo1/lc-demo1.component';
import { LcDemo2Component } from './lc-demo2/lc-demo2.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'lcDemo1',component:LcDemo1Component},
  {path:'lcDemo2',component:LcDemo2Component},
  {path:'',redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
