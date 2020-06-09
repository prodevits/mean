import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TdfDemo1Component } from './tdf-demo1/tdf-demo1.component';
import { TdfDemo2Component } from './tdf-demo2/tdf-demo2.component';
import { TdfVal1Component } from './tdf-val1/tdf-val1.component';
import { TdfVal2Component } from './tdf-val2/tdf-val2.component';
import { TdfVal3Component } from './tdf-val3/tdf-val3.component';
import { TdfVal1BsComponent } from './tdf-val1-bs/tdf-val1-bs.component';
import { TdfVal2BsComponent } from './tdf-val2-bs/tdf-val2-bs.component';


const routes: Routes = [
  {path:"tdf1",component:TdfDemo1Component},
  {path:"tdf2",component:TdfDemo2Component},  
  {path:"tdfVal1",component:TdfVal1Component},    
  {path:"tdfVal2",component:TdfVal2Component}, 
  {path:"tdfVal3",component:TdfVal3Component}, 
  {path:"tdfVal1BS",component:TdfVal1BsComponent},
  {path:"tdfVal2BS",component:TdfVal2BsComponent},
  
  {path:'',redirectTo:'tdf1',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
