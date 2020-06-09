import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf-custom-val1',
  templateUrl: './tdf-custom-val1.component.html',
  styleUrls: ['./tdf-custom-val1.component.css']
})
export class TdfCustomVal1Component implements OnInit {
  @ViewChild("regForm",{static:true}) regForm:NgForm;
  constructor() { }

  ngOnInit() {
  }

}
