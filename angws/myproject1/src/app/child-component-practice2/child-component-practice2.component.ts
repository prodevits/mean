import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-component-practice2',
  templateUrl: './child-component-practice2.component.html',
  styleUrls: ['./child-component-practice2.component.css']
})
export class ChildComponentPractice2Component implements OnInit {
  persons=[{id:101,name: 'Ramesh sharma', age: 34,salary:45000,dept:'HR'},
  {id:102,name: 'sohan singh', age:12,salary:12000.897,dept:'ACCOUNT'},
  {id:103,name: 'Raman', age:89,salary:8000,dept:'SALES'},
  {id:104,name: 'Ranak', age:89,salary:78000,dept:'NA'},
  {id:105,name: 'suman', age:29,salary:38000,dept:'ACCOUNT'}];

  personToEdit=undefined;

  constructor() { }

  ngOnInit() {
  }
  addPerson(person:{id:number,name:string,age:number,salary:number,dept:string}){
    this.persons.push(person);
  }
  
  updatePerson(person:{id:number,name:string,age:number,salary:number,dept:string}){
    let index=this.persons.findIndex(p => p.id==person.id);
    this.persons[index]=person;

  }

  removePerson(id:number){
    let index=this.persons.findIndex(p => p.id==id);
    this.persons.splice(index,1);
  }

editPerson(id:number){
    this.personToEdit=this.persons.find(p => p.id==id);   
  }

}
