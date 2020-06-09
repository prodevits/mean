import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-tdf-val2-bs',
  templateUrl: './tdf-val2-bs.component.html',
  styleUrls: ['./tdf-val2-bs.component.css']
})
export class TdfVal2BsComponent implements OnInit {
  
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
