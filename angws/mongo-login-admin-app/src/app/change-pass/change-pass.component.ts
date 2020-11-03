import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { AppValidators } from '../validators/app.validators';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {
  form:FormGroup;
  status=undefined;
  message=undefined;
  constructor(private userService:UserService) { }

  get cpassword(){
    return this.form.controls.cpassword;
  }

  get npassword(){
    return this.form.controls.npassword;
  }

  get ncpassword(){
    return this.form.controls.ncpassword;
  }

  ngOnInit() {
this.form=new FormGroup({
  cpassword:new FormControl('',Validators.required),
  npassword:new FormControl('',Validators.required),
  ncpassword:new FormControl(),
},AppValidators.textMatch('npassword',"ncpassword"));

    }

  onSubmit(){
    console.log(this.form.value);
    this.userService.changePassword(this.form.value.cpassword,this.form.value.npassword).subscribe(response=>{
      this.status=response.status;
      this.message=response.message;
      if(response.status=='success'  ){
          this.form.reset();
        }
    });
  }

}
