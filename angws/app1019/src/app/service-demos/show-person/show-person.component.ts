import { Component, OnInit, Input } from '@angular/core';
import { PersonService } from '../person.service';

@Component({
  selector: '.app-show-person',
  templateUrl: './show-person.component.html',
  styleUrls: ['./show-person.component.css']
})
export class ShowPersonComponent implements OnInit {
  editMode=false;
  @Input() person:{id:number,name:string,age:number,salary:number,dept:string};
  constructor(private personService:PersonService) {
    personService.onEditModeChange.subscribe( data=> this.editMode=data);
   }

  ngOnInit() {
  }

  edit(id){
    this.personService.editPerson(id);
 
  }

  remove(id){
    if(confirm('Sure to remove?'))
   this.personService.removePerson(id);
 
  }
}
