import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegComponent } from './user-reg/user-reg.component';
import { LoginComponent } from './login/login.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { HeaderComponent } from './header/header.component';
import { LogoutComponent } from './logout/logout.component';
import { UpdatePhotoComponent } from './update-photo/update-photo.component';
import { UsersComponent } from './users/users.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ChangePassComponent } from './change-pass/change-pass.component';


const routes: Routes = [
  {path:'',redirectTo:"login",pathMatch:'full'},
  {path:"reg",component:UserRegComponent},
  {path:"users",component:UsersComponent},
  {path:"login",component:LoginComponent},
  {path:"user-home",component:UserHomeComponent},
  {path:'header',component:HeaderComponent},
  {path:'logout',component:LogoutComponent},
  {path:'update-photo',component:UpdatePhotoComponent},
  {path:'myprofile',component:MyProfileComponent},
  {path:'changepass',component:ChangePassComponent},
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
