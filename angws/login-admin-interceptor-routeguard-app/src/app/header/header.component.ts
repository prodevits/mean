import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userLoggedIn=false;
  uname:string;
  pic:string;
  role:string;
  constructor(private authService:AuthService,private userSerice:UserService) { }

  ngOnInit() {
    this.authService.getAuthStatusListener().subscribe(data=> {
      this.userLoggedIn=data;
      if(this.userLoggedIn){
        this.uname=this.userSerice.uname;
        this.pic=this.userSerice.getProfilePhoto();
        this.role=this.userSerice.role;
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
