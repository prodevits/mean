import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { NgForm, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  user:User;
  editMode=false;
  userform:FormGroup;
  error=undefined;
  message=undefined;
  constructor(private userService:UserService) {
    this.userService.getMyProfile().subscribe(user=>{
      this.user=user; 
      });
   }

  ngOnInit() {
    this.userform=new FormGroup({
      name: new FormControl(),        
      city: new FormControl(),
      mobile_no:new FormControl()
    });
  }

  edit(){
     console.log("-------------");    
    console.log(this.userform.value);
    this.userform.setValue({name:this.user.name,city:this.user.city,mobile_no:this.user.mobile_no});
    this.editMode=true;
  }

  update(){
    const u=this.userform.value;
 this.userService.updateMyProfile(u.name,u.city,u.mobile_no).subscribe(response=>{
   if(response.status=='success')
   {
    this.message="Data Updated Successfully";
    this.editMode=false;
    this.user.name=u.name;
    this.user.city=u.city;
    this.user.mobile_no=u.mobile_no;
   }else{
    this.error=response.message;
   }
 });
  }
}
