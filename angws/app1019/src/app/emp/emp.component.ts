import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './emp.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  // template:`<h2>
  //             Hello  {{name}}
  //           </h2>
  //           <p>its Emp Management </p>`,
  styleUrls: ['./emp.component.css'],
  providers: [EmployeeService]

  // styles: [`h2 {  color: #F00;}`,`p{ background:#FF0;}`]
})
export class EmpComponent implements OnInit {
  cities:string[]=['indore','mumbai','pune'];
  name:string="Aman Sharma";
  nri:boolean=true;
  text_color_class='txt-red';
  text_color='#F0F';
  myStyle={background:'#ccc',color:'#F00',fontStyle:'italic'};
  states=[];
  cityNames=[];
  constructor(private empService:EmployeeService) { 
    empService.getStates().subscribe(data=> {
      this.states=data
      this.getCities(this.states[0].code);
    });
  }

  message():string{
    return `${this.name}, this employee management application`;
  }
  ngOnInit() {
  }

doTask(nm):void{
  console.log(nm.value);
  this.name=nm.value;
  this.cities.push(nm.value);
}

load_cities(event){
  let st=event.target.value;
  this.getCities(st);
 }
 ctSubcription:Subscription;
getCities(st:string){
  if(this.ctSubcription){
    this.ctSubcription.unsubscribe();;
    console.log("unsubscribe old...");    
  }
  this.ctSubcription=this.empService.getCities(st).subscribe(data=> this.cityNames=data);

}
}
