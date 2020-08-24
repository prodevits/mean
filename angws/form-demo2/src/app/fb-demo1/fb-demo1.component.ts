import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';


@Component({
  selector: 'app-fb-demo1',
  templateUrl: './fb-demo1.component.html',
  styleUrls: ['./fb-demo1.component.css']
})
export class FbDemo1Component implements OnInit {

  regForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.regForm = this.formBuilder.group({
      gender: [],
      name: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', Validators.min(18)],
      email: ['', [Validators.required, Validators.email]],
      salary: ['', ],
      password: ['', [Validators.required]],
      cpassword: [''],
      skills: this.formBuilder.array([]),
      educations: this.formBuilder.array([this.formBuilder.group({
        title: [],
        year: [],
        result: []
      })]),
      address:this.formBuilder.group({
        street:[],
        city: [],
        pincode:[]
      })
    });
  }

  get rfc() {
    return this.regForm.controls;
  }
  onSubmit() {
    console.log(this.regForm.value);
    console.log(this.regForm.value.email);
  }

  clear() {
    this.regForm.reset();
  }

  get skills() {
    return this.regForm.get('skills') as FormArray;
  }
  get educations() {
    return this.regForm.get('educations') as FormArray;
  }

  addSkill() {
    this.skills.push(this.formBuilder.control(''));
  }
  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  addEdu() {
    this.educations.push(this.formBuilder.group({
      title: [],
      year: [],
      result: []
    }));
  }
}