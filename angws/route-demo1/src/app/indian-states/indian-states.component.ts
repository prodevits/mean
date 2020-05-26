import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indian-states',
  templateUrl: './indian-states.component.html',
  styleUrls: ['./indian-states.component.css']
})
export class IndianStatesComponent implements OnInit {
  states=[{code:"mp",name:"Madhya Pradesh"},{code:"up",name:"Utter Pradesh"},{code:"mh",name:"Maharastra"}];
  constructor() { }

  ngOnInit() {
  }

}
