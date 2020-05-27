import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-demos',
  templateUrl: './pipes-demos.component.html',
  styleUrls: ['./pipes-demos.component.css']
})
export class PipesDemosComponent implements OnInit {
  persons=[{id:101,name: 'Ramesh sharma', age: 34,salary:45000,dept:'HR'},
  {id:102,name: 'sohan singh', age:12,salary:12000.897,dept:'ACCOUNT'},
  {id:103,name: 'Raman', age:89,salary:8000,dept:'SALES'},
  {id:104,name: 'Ranak', age:89,salary:78000,dept:'NA'},
  {id:105,name: 'suman', age:29,salary:38000,dept:'ACCOUNT'}];

  // p:{id:number,name:string,age:number,salary:number,dept:string}={id:undefined,name: '', age: undefined,salary:undefined,dept:'HR'};
  p:{id:number,name:string,age:number,salary:number,dept:string}={id:105,name: 'suman', age:29,salary:38000,dept:'ACCOUNT'};
sdata='salary';
editMode=false;
  constructor() { }
  ngOnInit() {
  }

  add(){
    this.persons.push(this.p);
    this.sdata='id';
  }
  onPersonUpdate(){

  }
  onCancelUpdate(){
    
  }
}
