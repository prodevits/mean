import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { EmpComponent } from './emp/emp.component';
import { DeptComponent } from './dept/dept.component';
import { IndianStatesComponent } from './indian-states/indian-states.component';
import { StatesCapitalComponent } from './states-capital/states-capital.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddIndianStateComponent } from './add-indian-state/add-indian-state.component'
import { LifeDemoComponent } from './life-demo/life-demo.component';
import { ProductsComponent } from './products/products.component';
import { RemoveProductComponent } from './remove-product/remove-product.component';
import { AddProductComponent } from './add-product/add-product.component';




const routes: Routes = [  
  {path:'home',component:HomeComponent},
  {path:'account',component:AccountComponent},
  {path:'emp',component:EmpComponent},
  {path:'dept',component:DeptComponent},
  {path:'states',component:IndianStatesComponent},  
  {path:'capital/:code',component:StatesCapitalComponent},   
  {path:'addState',component:AddIndianStateComponent}, 
  {path:'lcDemo',component:LifeDemoComponent},   
  {path:'products',component:ProductsComponent},
  {path:'addProduct',component:AddProductComponent},
  {path:'editProduct/:id',component:AddProductComponent},  
  {path:'removeProduct/:id',component:RemoveProductComponent},
  {path:'',redirectTo:'home', pathMatch:"full"} ,
  {path:'**',component:NotFoundComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
