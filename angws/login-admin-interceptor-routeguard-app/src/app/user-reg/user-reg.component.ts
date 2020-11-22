import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent implements OnInit {
  @ViewChild('userform',{static:true}) userform:NgForm;
  error=undefined;

  constructor(private userService:UserService,private router:Router) { }
  ngOnInit() {

  }

  addUser(){
    const u=this.userform.value;    
    console.log(u);
    this.userService.addUser(u).subscribe(data=>{
      console.log(data);      
        if(data.status=='fail'){
          this.error=data.message;
        }else{
          this.router.navigateByUrl("/login");
        }

    });
    
  }

}
