import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { range } from 'validators/range.validator';


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
      name: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]), 
      salary:new FormControl('',range(3000,50000)),
      pssword: new FormControl('',Validators.required),
      cpassword: new FormControl(''),     
    });
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