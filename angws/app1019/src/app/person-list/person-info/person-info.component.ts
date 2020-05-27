import { Component, OnInit, Input, ViewEncapsulation, OnChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: '.app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PersonInfoComponent {
  @Output() onPersonRemove=new EventEmitter<number>();
  @Output() onPersonEdit=new EventEmitter<number>();

  @Input() person:{id:number, name: string, age: number, salary: number, dept: string };
  @Input() editMode:boolean;

  constructor() { }
  remove(){  

    if(confirm('Are u sure to Remove this entry?'))
      this.onPersonRemove.emit(this.person.id);
  }
  edit(){  
    console.log('editing...'+this.person.id);
        
      this.onPersonEdit.emit(this.person.id);
  }
}
