import { Component, OnInit } from '@angular/core';
import { AuthService } from '../serices/auth.service';
import { UserService } from '../serices/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userLoggedIn=false;
  uname:string;
  pic:string;
  constructor(private authService:AuthService,private userSerice:UserService) { }

  ngOnInit() {
    this.authService.getAuthStatusListener().subscribe(data=> {
      this.userLoggedIn=data;
      if(this.userLoggedIn){
        this.uname=this.userSerice.uname;
        this.pic=this.userSerice.getProfilePhoto();
      }
      else{
        this.uname=undefined;
        this.pic=undefined;
      }
    });


    this.userSerice.getPicUpdateListener().subscribe(data=>{
      this.pic=this.userSerice.getProfilePhoto();
    })
  }


}
