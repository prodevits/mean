import { Component, OnInit } from '@angular/core';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-indian-states',
  templateUrl: './indian-states.component.html',
  styleUrls: ['./indian-states.component.css']
})
export class IndianStatesComponent implements OnInit {
  states:{code:string,name:string}[];
  constructor(private stateService:StateService) { 
    this.states=stateService.getIndianStates();
  }

  ngOnInit() {
  }

}
