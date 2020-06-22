import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-demo2',
  templateUrl: './reactive-form-demo2.component.html',
  styleUrls: ['./reactive-form-demo2.component.css']
})
export class ReactiveFormDemo2Component implements OnInit {
  regForm:FormGroup;

  constructor() { }

  ngOnInit() {
    this.regForm=new FormGroup({
      name: new FormControl(),
      email: new FormControl(), 
      salary:new FormControl(),
      address:new FormGroup({
        street:new FormControl(),
        city: new FormControl(),
        pincode:new FormControl()
      })
    });
  }

  onSubmit(){
    console.log(this.regForm.value);    
    console.log(this.regForm.value.email);    
    console.log(this.regForm.value.address);
    console.log(this.regForm.value.address.city);
    console.log((this.regForm.controls.address as FormGroup).controls.city.value);
    
  }

  clear(){
    this.regForm.reset();
  }

}