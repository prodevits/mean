import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatchValidator } from '../custom/match-validator';
import { ValidateUnameValidator } from '../custom/validate-uname-validator.directive';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
regForm:FormGroup;
eduCount=1;
edu=[1];
  constructor() { }

  addEdu(){
    this.eduCount++;
    this.edu.push(this.eduCount)
    const educ=new FormGroup({
      title:new FormControl(),
      passYear: new FormControl(),
      result: new FormControl()
    });
    this.regForm.addControl('educations'+this.eduCount,educ);
  }
  ngOnInit() {
    this.regForm=new FormGroup({

      uname:new FormControl('',[Validators.required,Validators.minLength(3)]),
      email:new FormControl(),
      password:new FormControl(),
      cpassword:new FormControl(),
      educations1:new FormGroup({
        title:new FormControl(),
        passYear: new FormControl(),
        result: new FormControl()
      }
    )},  MatchValidator.matchWith('password','cpassword')
  );
  }
  onSubmit(){
    //console.log(this.regForm);
    console.log(this.regForm.value);
    // console.log(this.regForm.controls.uname.value);
    // console.log(this.regForm.controls.email.value);
    // console.log(this.regForm.controls.uname.errors);
    // console.log(this.regForm.get('uname').value);
     
  }

}
