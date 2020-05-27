import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-class-demo',
  templateUrl: './style-class-demo.component.html',
  styleUrls: ['./style-class-demo.component.css']
})
export class StyleClassDemoComponent implements OnInit {
fsA=['20px','30px','40px','50px','60px'];
fss=this.fsA[0];
bg='red';
fg='green';
tc=true;
fs=false;
bgc='red';
country='india';
 constructor() { }

  ngOnInit() {
  }

  setBg(c){
this.bgc=c;
  }

  setCountry(c){
this.country=c;
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
