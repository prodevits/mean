import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { fucase } from '../validators/fucase.validator';
import { AppValidators } from '../validators/app.validators';



@Component({
  selector: 'app-rf-custom-val-demo1',
  templateUrl: './rf-custom-val-demo1.component.html',
  styleUrls: ['./rf-custom-val-demo1.component.css']
})
export class RfCustomValDemo1Component implements OnInit {
  regForm:FormGroup;
 
  constructor() { }

  ngOnInit() {
    this.regForm=new FormGroup({
      gender:new FormControl(),
      //name: new FormControl('',[Validators.required,Validators.minLength(3),fucase]),
      name: new FormControl('',[Validators.required,Validators.minLength(3),AppValidators.firstucase]),
      age: new FormControl('',[AppValidators.range(18,45)]),    
      email: new FormControl('',[Validators.required,Validators.email]), 
      salary:new FormControl(''),
      password: new FormControl('',[Validators.required]),
      cpassword: new FormControl(''),   
      
    },AppValidators.textmatch('password','cpassword'));
  }

  get  rfc(){
    return this.regForm.controls;
  }

  
  
  onSubmit(){
    console.log(this.regForm.value);    
    console.log(this.regForm.value.email);    

    
  }

  clear(){
    this.regForm.reset();
  }

}