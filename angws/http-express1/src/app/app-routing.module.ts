import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { RemoveProductComponent } from './remove-product/remove-product.component';


const routes: Routes = [
{path:'products',component:ProductsComponent},
{path:'new-product',component:AddProductComponent},
{path:'new-product/:id',component:AddProductComponent},
{path:'remove-product/:id',component:RemoveProductComponent},

{path:'',redirectTo:'products',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
