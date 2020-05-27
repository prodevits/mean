import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel, FormGroup } from '@angular/forms';
import { User } from './user.model';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.css']
})
export class TdFormComponent implements OnInit {
  @ViewChild('frm',{static:false}) form:NgForm;
  constructor() { }

  ngOnInit() {
  }

users:User[]=[];
onSubmit(){
 // console.log(this.form.value.uname);
  //  let fg= this.form.getFormGroup();
if(this.form.dirty){
  console.log('Data Modified..');
  console.log(this.form.value);
    let user:User=new User();
   Object.assign(user,this.form.value);
   if (user.id){
    let index=this.users.findIndex(u=>u.id==user.id);
    Object.assign(this.users[index],user);
    console.log("data Updated");
    
   }else{
    user.setId();
    this.users.push(user) ;
    console.log("user added");
    
    //console.log(this.form);
   }

   this.form.reset(); 
}
else
  console.log("No Changes");
  
    
   
}

edit(id){
  let user=this.users.find( u=> u.id==id);
  this.form.setValue(user);
}
}
