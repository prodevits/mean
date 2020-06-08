import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf-demo1',
  templateUrl: './tdf-demo1.component.html',
  styleUrls: ['./tdf-demo1.component.css']
})
export class TdfDemo1Component implements OnInit {
  @ViewChild("empForm",{static:true})  empForm:NgForm;
  
  onSubmit(){
    console.log(this.empForm.value);
    const obj=this.empForm.value;
    console.log(obj);
    console.log("First Name="+obj.fname); 
  }

  clear()
  {
    this.empForm.reset();
  }

  constructor() { }
  ngOnInit() {
  }

edit(){
  const obj={fname:'Aman',lname:'Sharma',email:'ramesh@gmail.com',gender:'MALE',nri:true};
  this.empForm.setValue(obj);
}

}

