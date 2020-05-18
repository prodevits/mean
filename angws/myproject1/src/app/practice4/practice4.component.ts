import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice4',
  templateUrl: './practice4.component.html',
  styleUrls: ['./practice4.component.css']
})
export class Practice4Component implements OnInit {
// Array of Employees
emps:{empid:number,name:string,gender:string,city:string,salary:number,nri:boolean}[]=[];

// ngModels
empid:number;
name:string;
city:string;
salary:number;
gender:string;
nri:boolean=false;
// add / edit mode 
editMode=false;


constructor() { }
ngOnInit() {
}

add(){
  const e={empid:this.empid,name:this.name,gender:this.gender,city:this.city,salary:this.salary,nri:this.nri};
  this.emps.push(e);
  this.reset();
}

remove(id){
  if(confirm("Are u sure to Remove Employee : "+id)){
    const index=this.emps.findIndex((e)=>e.empid==id);
    this.emps.splice(index,1);
  }
}

edit(id){    
    const index=this.emps.findIndex((e)=>e.empid==id);
    const e=this.emps[index];
    this.empid=e.empid;
    this.name=e.name;
    this.city=e.city;
    this.salary=e.salary;   
    this.gender=e.gender;
    this.nri=e.nri;
    this.editMode=true;      
}

reset(){
  this.empid=null;
  this.name=null;
  this.city=null;
  this.salary=null;
  this.gender=null;
  this.nri=false;
  this.editMode=false;
}
cancel(){
  this.reset();
}

update(){
  const emp={empid:this.empid,name:this.name,gender:this.gender ,city:this.city,salary:this.salary,nri:this.nri};
  const index=this.emps.findIndex((e)=>e.empid==emp.empid);
 this.emps[index]=emp;
 this.reset();
}

}
