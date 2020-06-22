import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormDemo1Component } from './reactive-form-demo1/reactive-form-demo1.component';
import { ReactiveFormDemo2Component } from './reactive-form-demo2/reactive-form-demo2.component';
import { RfValDemo1Component } from './rf-val-demo1/rf-val-demo1.component';
import { RfValDemo2Component } from './rf-val-demo2/rf-val-demo2.component';
import { RfCustomValDemo1Component } from './rf-custom-val-demo1/rf-custom-val-demo1.component';
import { RfArray1Component } from './rf-array1/rf-array1.component';


const routes: Routes = [
  {path:'rfdemo1',component:ReactiveFormDemo1Component},
  {path:'rfdemo2',component:ReactiveFormDemo2Component},
  {path:'rfval1',component:RfValDemo1Component},
  {path:'rfval2',component:RfValDemo2Component},
  {path:'rfcval1',component:RfCustomValDemo1Component},
  {path:'rfArray1',component:RfArray1Component},
  {path:'',redirectTo:'rfdemo1',pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
