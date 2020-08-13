import { Component, OnInit } from '@angular/core';
import { State } from '../models/state.model';
import { AppHttpService } from '../services/appHttp.service';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {

  states:State[];
  constructor(private appHttpService:AppHttpService) { }

  ngOnInit() {
    this.appHttpService.getStates().subscribe((data)=>{
      console.log(data);      
      this.states=data;
    });
  }

}
