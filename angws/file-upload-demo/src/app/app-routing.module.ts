import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegComponent } from './reg/reg.component';
import { UsersComponent } from './users/users.component';
import { RegPhotoWithEventComponent } from './reg-photo-with-event/reg-photo-with-event.component';
import { Reg2Component } from './reg2/reg2.component';
import { Reg3ValComponent } from './reg3-val/reg3-val.component';


const routes: Routes = [
  {path:'reg',component:RegComponent},
  {path:'reg2',component:Reg2Component},
  {path:'reg3',component:Reg3ValComponent},  
  {path:'regEvent',component:RegPhotoWithEventComponent},
  {path:'users',component:UsersComponent},
  {path:'',redirectTo:'reg',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
