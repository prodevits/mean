import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatesComponent } from './states/states.component';
import { CitiesComponent } from './cities/cities.component';
import { StateCityComponent } from './state-city/state-city.component';
import { EmpsComponent } from './emps/emps.component';

const routes: Routes = [
  {path:'states',component:StatesComponent},
  {path:'cities',component:CitiesComponent},
  {path:'stcts',component:StateCityComponent},
  {path:'emps',component:EmpsComponent},
  {path:'',redirectTo:'cities',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
