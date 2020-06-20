import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-rf-val-demo1',
  templateUrl: './rf-val-demo1.component.html',
  styleUrls: ['./rf-val-demo1.component.css']
})
export class RfValDemo1Component implements OnInit {
  regForm:FormGroup;

  constructor() { }

  ngOnInit() {
    this.regForm=new FormGroup({
      gender:new FormControl(),
      name: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]), 
      salary:new FormControl(),
      nri:new FormControl(false),
      address:new FormGroup({
        street:new FormControl(),
        city: new FormControl('',Validators.required),
        pincode:new FormControl()
      })
    });
  }

  onSubmit(){
    console.log(this.regForm.value);    
    console.log(this.regForm.value.email);    
    console.log(this.regForm.value.address);
    
  }

  clear(){
    this.regForm.reset();
  }

}