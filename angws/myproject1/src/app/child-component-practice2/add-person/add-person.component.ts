import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {
  @Output() personAdded = new EventEmitter<{id:number, name: string, age: number, salary: number, dept: string }>();
 
  constructor() { }

  ngOnInit() {
  }

  name: string;
  age: number;
  salary: number;
  dept: string;
  id:number;

  onPersonAdd() {
    this.personAdded.emit({id:this.id, name: this.name, age: this.age, salary: this.salary, dept: this.dept });
    this.clear();
  }
  
  clear(){
    this.id=null;
    this.name=null;
    this.salary=null;
    this.dept=null;
    this.age=null;
  }
}
