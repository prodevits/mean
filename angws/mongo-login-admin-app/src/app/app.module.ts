import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UserRegComponent } from './user-reg/user-reg.component';
import { LoginComponent } from './login/login.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { LogoutComponent } from './logout/logout.component';
import { HeaderComponent } from './header/header.component';
import { UpdatePhotoComponent } from './update-photo/update-photo.component';
import { UsersComponent } from './users/users.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ChangePassComponent } from './change-pass/change-pass.component'


@NgModule({
  declarations: [
    AppComponent,
    UserRegComponent,
    LoginComponent,
    UserHomeComponent,
    LogoutComponent,
    HeaderComponent,
    UpdatePhotoComponent,
    UsersComponent,
    MyProfileComponent,
    ChangePassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
