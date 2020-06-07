import { Component, OnInit } from '@angular/core';
import { MyHttpService } from '../services/myHttp.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  cities:string[];

  stateCode:string;
  constructor(private http:MyHttpService) { }
  ngOnInit() {
   
  }


  loadCities(){
    console.log("Geting for "+this.stateCode);    
    this.http.getCities(this.stateCode).subscribe((data)=>{
      this.cities=data;
    });
  }

}
