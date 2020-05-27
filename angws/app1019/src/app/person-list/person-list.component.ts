import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit,OnChanges,OnDestroy {
  searchData:string='';
  order='A';
  pnames=['id','name','age','salary','dept'];
  persons=[{id:101,name: 'Ramesh sharma', age: 34,salary:45000,dept:'HR'},
  {id:102,name: 'sohan singh', age:12,salary:12000.897,dept:'ACCOUNT'},
  {id:103,name: 'Raman', age:89,salary:8000,dept:'SALES'},
  {id:104,name: 'Ranak', age:89,salary:78000,dept:'NA'},
  {id:105,name: 'suman', age:29,salary:38000,dept:'ACCOUNT'}];

  personEditable:{id:number,name:string,age:number,salary:number,dept:string};
  editMode:boolean=false;
  addPerson(person:{id:number,name:string,age:number,salary:number,dept:string}){
    this.persons.push(person);
  }

  removePerson(id:number){
    let index=this.persons.findIndex(p => p.id==id);
    this.persons.splice(index,1);
  }

  editPerson(id:number){
    console.log('receiving  edit...');
    let index=this.persons.findIndex(p => p.id==id);
    this.personEditable=this.persons[index];
    this.editMode=true;
  }
  updatePerson(person:{id:number,name:string,age:number,salary:number,dept:string}){
    let index=this.persons.findIndex(p => p.id==person.id);
    //Object.assign(target,source)
    Object.assign(this.persons[index], person);
    this.personEditable=undefined;
    this.editMode=false;

    const myClonedArray  = Object.assign([],this.persons);
   
  }
  onCancelUpdate(){
    this.editMode=false;
  }
  constructor() { 
    console.log("constructor....");
  }

  ngOnInit() {
    console.log("In it....");
    
  }
  ngOnChanges(){
    console.log("on change....");
  }

  ngOnDestroy(){
    console.log("on destroy....");
  }
  
}
