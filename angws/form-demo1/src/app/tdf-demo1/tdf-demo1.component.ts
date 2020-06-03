import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf-demo1',
  templateUrl: './tdf-demo1.component.html',
  styleUrls: ['./tdf-demo1.component.css']
})
export class TdfDemo1Component implements OnInit {
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

