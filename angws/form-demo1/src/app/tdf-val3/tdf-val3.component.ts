import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-tdf-val3',
  templateUrl: './tdf-val3.component.html',
  styleUrls: ['./tdf-val3.component.css']
})
export class TdfVal3Component implements OnInit {
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
