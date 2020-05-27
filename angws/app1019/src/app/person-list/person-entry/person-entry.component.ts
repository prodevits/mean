import { Component, OnInit, EventEmitter, Output, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-person-entry',
  templateUrl: './person-entry.component.html',
  styleUrls: ['./person-entry.component.css']
})
export class PersonEntryComponent implements OnInit, OnChanges {
  @Output() personAdded = new EventEmitter<{id:number, name: string, age: number, salary: number, dept: string }>();
  @Output() personUpdated = new EventEmitter<{id:number, name: string, age: number, salary: number, dept: string }>();
  @Output() updateCancelled = new EventEmitter();

  name: string;
  age: number;
  salary: number;
  dept: string;
  editMode=false;
  id:number;
  @Input() person: {id:number, name: string, age: number, salary: number, dept: string };
  
  
  ngOnChanges(changes: SimpleChanges) {
    console.log("changes in person entry");
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
    console.log(this.person);
    if (this.person){
      this.editMode=true;
    this.name = this.person.name;
    this.age = this.person.age;
    this.salary = this.person.salary;
    this.dept = this.person.dept;
    this.id = this.person.id;
    }else{
      this.editMode=false;
    }
    
    
    
  }
  constructor() { }
  ngOnInit() {
  }
  onPersonAdd() {
    this.personAdded.emit({id:this.id, name: this.name, age: this.age, salary: this.salary, dept: this.dept });
    this.clear();
  }
  onPersonUpdate()
  {
    this.personUpdated.emit({id:this.id, name: this.name, age: this.age, salary: this.salary, dept: this.dept });
this.clear();
  }
  onCancelUpdate()
  {
  this.clear();
  this.editMode=false;
this.updateCancelled.emit();
  }
  clear(){
    this.id=null;
    this.name=null;
    this.salary=null;
    this.dept=null;
    this.age=null;
  }
}
