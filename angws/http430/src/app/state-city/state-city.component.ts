import { Component, OnInit } from '@angular/core';
import { AppHttpService } from '../services/appHttp.service';
import { State } from '../models/state.model';

@Component({
  selector: 'app-state-city',
  templateUrl: './state-city.component.html',
  styleUrls: ['./state-city.component.css']
})
export class StateCityComponent implements OnInit {

  states:State[];
  cities:string[];
  loading=false;

  constructor(private appHttpService:AppHttpService) { }

  ngOnInit() {
    this.appHttpService.getStates().subscribe((data)=>{
      console.log(data);      
      this.states=data;
    });
  }

  loadCities(st){
    this.loading=true;
    console.log(st);
    this.appHttpService.getCities(st.toUpperCase()).subscribe((data)=>{
      console.log(data);      
      this.cities=data;
      this.loading=false;
    });
  }

}
