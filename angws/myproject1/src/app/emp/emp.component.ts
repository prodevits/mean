import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
  name:string="Rohit Singh";
  age:number=23;
  basic=10000;
  allowance=2000;
  deduction=1500;
  count=0;
  active=true;
  
  constructor() { }

  ageGroup(){
    if (this.age<18)
      return "Teenage";
    else if( this.age<45)
      return "Young";
    else if(this.age<60)
      return "Major";
    else
      return "Senior";
  }

  grossSalary():number{
    return this.basic+this.allowance-this.deduction;

  }
  ngOnInit() {
  }


  doSomething(){
    this.count++;
    console.log("button clicked.."+this.count);
    
  }
  doSubmit(name){
    this.name=name;
  }
}
