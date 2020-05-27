import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-form1',
  templateUrl: './td-form1.component.html',
  styleUrls: ['./td-form1.component.css']
})
export class TdForm1Component implements OnInit {
@ViewChild("stuForm",{static:false}) stuForm:NgForm;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.stuForm.value);
    const fname=this.stuForm.value.fname;
    const lname=this.stuForm.value.lname;
    const email=this.stuForm.value.email;
    console.log('First Name :'+fname);
    console.log('Last Name :'+lname);
    console.log('Email :'+email);
    this.stuForm.reset();
   // this.stuForm.form.patchValue({'email':'ravindra'});
  }
}
