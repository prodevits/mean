import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-rf-array1',
  templateUrl: './rf-array1.component.html',
  styleUrls: ['./rf-array1.component.css']
})
export class RfArray1Component implements OnInit {
 regForm:FormGroup;

 skillsArray:FormArray;

  constructor() { }

  ngOnInit() {
    this.skillsArray=new FormArray([]);

    
    this.regForm=new FormGroup({
      name: new FormControl(),
      email: new FormControl(),     
      city: new FormControl(),
      salary:new FormControl(),
      skills :this.skillsArray
    });
  }

  addSkill(){
    this.skillsArray.push(new FormControl(''));
  }
  onSubmit(){
    console.log(this.regForm.value);    
    console.log(this.regForm.value.email);    
  }

  removeSkill(index:number){
    this.skillsArray.removeAt(index);
  }
}
