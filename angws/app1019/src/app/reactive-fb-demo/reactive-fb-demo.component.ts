import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ValidateUnameValidator } from '../custom/validate-uname-validator.directive';
import { ConfirmPassValidatorDirective } from '../custom/confirm-pass-validator.directive';
import { MatchValidator } from '../custom/match-validator';

@Component({
  selector: 'app-reactive-fb-demo',
  templateUrl: './reactive-fb-demo.component.html',
  styleUrls: ['./reactive-fb-demo.component.css']
})
export class ReactiveFbDemoComponent implements OnInit {
  regForm:FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.regForm= this.formBuilder.group({
      uname:['',[Validators.required,Validators.minLength(3),ValidateUnameValidator.uname]],
      email:['',Validators.email],
      password:[''],
      cpassword:[''],
      educations:this.formBuilder.group({
        title:[''],
        passYear:[''],
        result:['']
      }),
    },{
      validator: MatchValidator.matchWith('password','cpassword')
    });
  }


onSubmit(){
  console.log(this.regForm);
  
  // console.log(this.regForm.value);
  
}
}
