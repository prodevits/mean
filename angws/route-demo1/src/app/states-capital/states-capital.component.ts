import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-states-capital',
  templateUrl: './states-capital.component.html',
  styleUrls: ['./states-capital.component.css']
})
export class StatesCapitalComponent implements OnInit {
  stateCode:string;
  stateName:string;
  capital:string;


  constructor(private activatedRoute:ActivatedRoute,private stateService:StateService) { }
  
  ngOnInit() {
    this.activatedRoute.params.subscribe((params)=>{
      this.stateCode=params['code'];
      this.stateName=this.stateService.getStateName(this.stateCode);
      this.capital=this.stateService.getCapital(this.stateCode);
    });
  }
}
