import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf-val1-bs',
  templateUrl: './tdf-val1-bs.component.html',
  styleUrls: ['./tdf-val1-bs.component.css']
})

export class TdfVal1BsComponent implements OnInit {
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

