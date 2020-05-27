import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {
  id:number;
  name: string;
  age: number;
  salary: number;
  dept: string;
  editMode=false;

  constructor(private personService:PersonService) { }

  ngOnInit() {
    this.personService.onPersonEdit.subscribe( (data : {id:number,name:string,age:number,salary:number,dept:string}) =>{
      this.id=data.id;
      this.name=data.name;
      this.age=data.age;
      this.salary=data.salary;
      this.dept=data.dept;     
      this.editMode=true;
    });
  }

  onPersonAdd() {
    let p={id:this.id, name: this.name, age: this.age, salary: this.salary, dept: this.dept };
    this.personService.addPerson(p);
    this.clear();
  }

  onPersonUpdate(){
    let p={id:this.id, name: this.name, age: this.age, salary: this.salary, dept: this.dept };
    this.personService.updatePerson(p);
  }

  onCancelUpdate(){
this.clear();
this.editMode=false;
this.personService.cancelUpdate();
  }

  clear(){
    this.id=null;
    this.name=null;
    this.salary=null;
    this.dept=null;
    this.age=null;
  }


}
