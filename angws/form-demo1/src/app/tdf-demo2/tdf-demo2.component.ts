import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf-demo2',
  templateUrl: './tdf-demo2.component.html',
  styleUrls: ['./tdf-demo2.component.css']
})
export class TdfDemo2Component implements OnInit {
  @ViewChild("empForm",{static:true})  empForm:NgForm;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.empForm.value);

  }

  clear()
  {
    this.empForm.reset();
  }
}

