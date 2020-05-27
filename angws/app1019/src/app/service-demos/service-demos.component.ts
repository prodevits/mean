import { Component, OnInit } from '@angular/core';
import { PersonService } from './person.service';

@Component({
  selector: 'app-service-demos',
  templateUrl: './service-demos.component.html',
  styleUrls: ['./service-demos.component.css']
})
export class ServiceDemosComponent implements OnInit {
  persons:{id:number,name:string,age:number,salary:number,dept:string}[];
  //p:{id:number,name:string,age:number,salary:number,dept:string}={id:105,name: 'suman', age:29,salary:38000,dept:'ACCOUNT'};
  editMode=false;

  constructor(private personService:PersonService) { 
    personService.onPersonChange.subscribe( data=>{
      this.persons=data;
    });

     }
  ngOnInit() {
   // this.persons=this.personService.persons;
   this.persons=this.personService.getPersons();
  }
  

}
