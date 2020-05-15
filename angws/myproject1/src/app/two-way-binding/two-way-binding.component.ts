import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  //demo1
  txtData="Demo Data";

  //demo2
nm:string;
age:number;
salary:number;
emp={};

process(){
    this.emp={"name":this.nm,"age":this.age,"salary":this.salary};
    this.nm='';
    this.age=null;
    this.salary=null;
  }


 //demo4
 state:string="UP";
 capital: string;
  getCapital() {  
    switch (this.state) {
      case "MP": this.capital = "BHOPAL";
        break;
      case "UP": this.capital = "LAKHNOW";
        break;
      case "MH": this.capital = "MUMBAI";
        break;     
      default:this.capital="State Not Selected";        
    }
  }
 

}
