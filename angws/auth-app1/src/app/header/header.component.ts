import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userLoggedIn=false;
  uname:string;
  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.authService.getAuthStatusListener().subscribe(data=> {
      this.userLoggedIn=data;
      if(this.userLoggedIn){
        this.uname=this.authService.getUname();
      }
      else{
        this.uname=undefined;
      }
    });
  }

}
