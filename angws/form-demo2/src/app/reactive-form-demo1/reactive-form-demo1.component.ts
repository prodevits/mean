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
      name: new FormControl('Guest'),
      email: new FormControl(),
      password: new FormControl(),
      city: new FormControl(),
      salary:new FormControl()
    });
  }

  onSubmit(){
    console.log(this.regForm.value);    
    console.log(this.regForm.value.email); 
    console.log(this.regForm.controls.email.value);
    console.log(this.regForm.get("email").value);          
  }

  clear(){
    this.regForm.reset();
  }

  setData(){
    const obj={name:'Aman',email:'aman@gmail.com',password:'aaaa',city:'Indore',salary:23400};
    this.regForm.setValue(obj);
  }

  patchData(){
    const obj={email:'aman@gmail.com',city:'Indore',salary:23400};
    this.regForm.patchValue(obj);
  }
}
