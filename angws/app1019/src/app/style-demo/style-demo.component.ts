import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-demo',
  templateUrl: './style-demo.component.html',
  styleUrls: ['./style-demo.component.css']
})
export class StyleDemoComponent implements OnInit {
  bgc = 'red';
  gender='male';
  country='india'

  constructor() { }
  ngOnInit() {
  }

  setBg(c) {
    this.bgc = c;
  }

  setCountry(c) {
    this.country = c;
  }

  getCountryColor(){
    switch(this.country){
      case 'india': return '#00f';
      case 'usa': return '#f00';
      case 'pak': return '#0f0';
      case 'japan': return '#0ff';
      default:return "#ff0";
    }
  }

}
