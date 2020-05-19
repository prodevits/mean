import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice5',
  templateUrl: './practice5.component.html',
  styleUrls: ['./practice5.component.css']
})
export class Practice5Component implements OnInit {
  emps:Employee[]=[
    {empid:101,name:'Raman',gender:'male',city:'indore',salary:27000,dob:'1989-11-23',experience:12},
    {empid:106,name:'Reena',gender:'female',city:'pune',salary:22500,dob:'1994-03-12',experience:5},
    {empid:102,name:'Sunil',gender:'male',city:'indore',salary:12000,dob:'2001-01-21',experience:3},
    {empid:105,name:'Ganesh',gender:'male',city:'mumbai',salary:45000,dob:'1971-12-05',experience:16},
    {empid:103,name:'ankita',gender:'female',city:'akola',salary:29000,dob:'2003-06-18',experience:0},
    {empid:104,name:'aman',gender:'male',city:'bhopal',salary:29000,dob:'2001-10-11',experience:0}
  ];

  fieldNames=['empid','name','city','salary','experience'];
  order='asc';
  sfn=this.fieldNames[0];
  searchData='';
  constructor() { }
  ngOnInit() {
  }


  // ngModels
empid:number;
name:string;
city:string;
salary:number;
gender:string;
dob:string;
experience:number;

add(){
  const temp=[...this.emps];
  const e={empid:this.empid,name:this.name,gender:this.gender,city:this.city,salary:this.salary,dob:this.dob,experience:this.experience};
  temp.push(e); 
  this.emps =temp;
  //this.reset();
}



reset(){
  this.empid=null;
  this.name=null;
  this.city=null;
  this.salary=null;
  this.gender=null;
  this.dob=null;
  this.experience=null;
}

}
