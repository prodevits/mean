import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf-val1',
  templateUrl: './tdf-val1.component.html',
  styleUrls: ['./tdf-val1.component.css']
})
export class TdfVal1Component implements OnInit {
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

