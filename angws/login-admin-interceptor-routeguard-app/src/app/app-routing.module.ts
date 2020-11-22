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
import { AuthGuard } from './auth/auth-guard';
import { InvalidAccessComponent } from './invalid-access/invalid-access.component';
import { AdminGuard } from './auth/admin-guard';

const routes: Routes = [
  {path:'',redirectTo:"login",pathMatch:'full'},
  {path:"reg",component:UserRegComponent},
  {path:"users",component:UsersComponent,canActivate:[AuthGuard,AdminGuard]},
  {path:"login",component:LoginComponent},
  {path:"user-home",component:UserHomeComponent,canActivate:[AuthGuard]},
  {path:'header',component:HeaderComponent},
  {path:'logout',component:LogoutComponent,canActivate:[AuthGuard]},
  {path:'update-photo',component:UpdatePhotoComponent,canActivate:[AuthGuard]},
  {path:'myprofile',component:MyProfileComponent,canActivate:[AuthGuard]},
  {path:'changepass',component:ChangePassComponent,canActivate:[AuthGuard]},
  {path:'invalid',component:InvalidAccessComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
