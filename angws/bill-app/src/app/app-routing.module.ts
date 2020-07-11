import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillNewComponent } from './bill-new/bill-new.component';
import { SearchBillComponent } from './search-bill/search-bill.component';


const routes: Routes = [
  {path:'newBill',component:BillNewComponent},
  {path:'search',component:SearchBillComponent},
  {path:'',redirectTo:'newBill',pathMatch:'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
