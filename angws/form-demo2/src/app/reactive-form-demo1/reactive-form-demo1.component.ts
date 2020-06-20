import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-demo1',
  templateUrl: './reactive-form-demo1.component.html',
  styleUrls: ['./reactive-form-demo1.component.css']
})
export class ReactiveFormDemo1Component implements OnInit {

  regForm:FormGroup;

  constructor() { }

  ngOnInit() {
    this.regForm=new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      city: new FormControl(),
      salary:new FormControl()
    });
  }

  onSubmit(){
    console.log(this.regForm.value);    
    console.log(this.regForm.value.email);    
  }

  clear(){
    this.regForm.reset();
  }
}
