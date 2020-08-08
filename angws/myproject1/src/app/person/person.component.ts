import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  persons=[{id:1,name:'rama',age:20},{id:2,name:'Sohan',age:18},{id:3,name:'aman',age:22}]
  constructor() { }

  ngOnInit() {
  }

  removePerson(id:number){
    console.log(id);
    
   let i= this.persons.findIndex((e)=>e.id==id);
   this.persons.splice(i,1);

  }
}
