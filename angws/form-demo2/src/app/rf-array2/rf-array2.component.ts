import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-rf-array2',
  templateUrl: './rf-array2.component.html',
  styleUrls: ['./rf-array2.component.css']
})
export class RfArray2Component implements OnInit {
  regForm:FormGroup;
  educationArray:FormArray;
  constructor() { }

  ngOnInit() {
    this.educationArray=new FormArray([new FormGroup({
      title:new FormControl(),
      year:new FormControl(),
      result:new FormControl()
    })]);

    this.regForm=new FormGroup({
      name: new FormControl(),
      email: new FormControl(),  
      city: new FormControl(),
      salary:new FormControl(),
      educations:this.educationArray
    });
  }

  onSubmit(){
    console.log(this.regForm.value);  
}
addEdu(){
  this.educationArray.push(new FormGroup({
    title:new FormControl(),
    year:new FormControl(),
    result:new FormControl()
  }));
}
}