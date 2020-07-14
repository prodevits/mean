import { Component, OnInit, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit,OnChanges {
  @Output() personAdded = new EventEmitter<{id:number, name: string, age: number, salary: number, dept: string }>();
  @Input() editablePerson :{id:number, name: string, age: number, salary: number, dept: string };
  @Output() personUpdated = new EventEmitter<{id:number, name: string, age: number, salary: number, dept: string }>();

  editMode:boolean=false;

  constructor() { }
  ngOnInit() {
  }

  name: string;
  age: number;
  salary: number;
  dept: string;
  id:number;

  add() {
    this.personAdded.emit({id:this.id, name: this.name, age: this.age, salary: this.salary, dept: this.dept });
    this.clear();
  }
  
  ngOnChanges(simpleChange:SimpleChanges){
    console.log("Change in Input");     
    this.id=this.editablePerson.id;
    this.name=this.editablePerson.name;
    this.salary=this.editablePerson.salary;
    this.dept=this.editablePerson.dept;
    this.age=this.editablePerson.age;
    this.editMode=true;
  }

  clear(){
    this.id=null;
    this.name=null;
    this.salary=null;
    this.dept=null;
    this.age=null;
  }


update() {
    this.personUpdated.emit({id:this.id, name: this.name, age: this.age, salary: this.salary, dept: this.dept });
    this.clear();
    this.editMode=false;
  }

  cancel(){
    this.clear();
    this.editMode=false;
  }
}
