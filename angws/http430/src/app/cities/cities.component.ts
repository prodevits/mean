import { Component, OnInit } from '@angular/core';
import { AppHttpService } from '../services/appHttp.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
cities:string[];

constructor(private appHttpService:AppHttpService) { }

  ngOnInit() {
    // this.appHttpService.getCities('MP').subscribe((data)=>{
    //   console.log(data);      
    //   this.cities=data;
    // });
  }


  loadCities(st){
    console.log(st);
    this.appHttpService.getCities(st.toUpperCase()).subscribe((data)=>{
      console.log(data);      
      this.cities=data;
    });
  }
}
