import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice2',
  templateUrl: './practice2.component.html',
  styleUrls: ['./practice2.component.css']
})
export class Practice2Component implements OnInit {
  constructor() { }
  ngOnInit() {
  }

  //assignment1
  resultAdd: string;
  resultSub: string;
  resultDiv: string;
  resultMult: string;

  calculate(event: any, v1: string, v2: string) {
    let chk = event.target;
    console.log(chk.checked);
    console.log(chk.value);
    let a = parseFloat(v1);
    let b = parseFloat(v2);

    switch (chk.value) {
      case "A":
        if (chk.checked) {
          this.resultAdd = "Addition=" + (a + b);
        } else {
          this.resultAdd = undefined;
        }
        break;
      case "S":
        if (chk.checked) {
          this.resultSub = "Subtraction=" + (a - b);
        } else {
          this.resultSub = undefined;
        }
        break;
      case "D":
        if (chk.checked) {
          this.resultDiv = "Division=" + (a / b);
        } else {
          this.resultDiv = undefined;
        }
        break;
      case "M":
        if (chk.checked) {
          this.resultMult = "Multiplication=" + (a * b);
        } else {
          this.resultMult = undefined;
        }
        break;
    }
  }

  //assignment2
  capital: string;
  getCapital(st:string) {  
    switch (st) {
      case "MP": this.capital = "BHOPAL";
        break;
      case "UP": this.capital = "LAKHNOW";
        break;
      case "MH": this.capital = "MUMBAI";
        break;     
      default:this.capital="State Not Selected";        
    }
  }

  capital1: string;
  showCapital(event:any) {  
    const st=event.target.value;
    switch (st) {
      case "MP": this.capital1 = "BHOPAL";
        break;
      case "UP": this.capital1 = "LAKHNOW";
        break;
      case "MH": this.capital1 = "MUMBAI";
        break;     
      default:this.capital1="State Not Selected";        
    }
  }

//assignment3 
txtValue1="";
txtValue2="";
exchange(v1:string,v2:string){
  this.txtValue1=v2;
  this.txtValue2=v1;
}

//
//assignment5
agree=false;
validate(event){
this.agree=event.target.checked;
}


//assignment 6
txtData="";
changeText(event)
{
this.txtData=event.target.value;
}
}

