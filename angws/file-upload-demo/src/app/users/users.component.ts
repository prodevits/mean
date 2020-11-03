import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserHttpService } from '../services/user.http.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:User[];
 
  constructor(private userHttpService:UserHttpService) {  
   }

  ngOnInit() {
    this.userHttpService.getAllUsers().subscribe((data:User[])=>{
      console.log(data);      
      if(data!=null && data.length>0){
        data.map(u=>u.photo=this.userHttpService.baseUrl+u.photo);
        this.users=data;
      } 
    });
  }
}
