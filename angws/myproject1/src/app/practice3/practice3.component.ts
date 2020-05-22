import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice3',
  templateUrl: './practice3.component.html',
  styleUrls: ['./practice3.component.css']
})
export class Practice3Component implements OnInit {
  // Array of Employees
  emps:{empid:number,name:string,city:string,salary:number}[]=[];

  editMode=false;


  // ngModels
  empid:number;
  name:string;
  city:string;
  salary:number;




  
 
  constructor() { }
  ngOnInit() {
  }

  add(){
    const e={empid:this.empid,name:this.name,city:this.city,salary:this.salary};
    this.emps.push(e);
    this.empid=null;
    this.name=null;
    this.city=null;
    this.salary=null;
  }

  remove(id){
    if(confirm("Are u sure to Remove Employee : "+id)){
      const index=this.emps.findIndex((e)=>e.empid==id);
      this.emps.splice(index,1);
    }
  }


  removeByIndex(index){    
      this.emps.splice(index,1);  
  }


  edit(index){
    this.editMode=true;
    const e=this.emps[index];
    this.empid=e.empid;
    this.name=e.name;
    this.city=e.city;
    this.salary=e.salary;
  }

  update(){
    const emp={empid:this.empid,name:this.name,city:this.city,salary:this.salary};

    const index=this.emps.findIndex((e)=>e.empid==emp.empid);
    
    this.emps[index]=emp;
    this.editMode=false;


    this.empid=null;
    this.name=null;
    this.city=null;
    this.salary=null;
  }
}
