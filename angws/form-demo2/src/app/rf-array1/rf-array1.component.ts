import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-rf-array1',
  templateUrl: './rf-array1.component.html',
  styleUrls: ['./rf-array1.component.css']
})
export class RfArray1Component implements OnInit {
 regForm:FormGroup;
 skills:FormArray;
  constructor() { }

  ngOnInit() {
    this.skills=new FormArray([]);
    this.regForm=new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      city: new FormControl(),
      salary:new FormControl(),
      skills :this.skills
    });
  }

  addSkill(){
    this.skills.push(new FormControl(''));
  }
  onSubmit(){
    console.log(this.regForm.value);    
    console.log(this.regForm.value.email);    
  }

}
