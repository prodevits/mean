import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: '.app-show-person',
  templateUrl: './show-person.component.html',
  styleUrls: ['./show-person.component.css']
})
export class ShowPersonComponent implements OnInit {

  @Output() onPersonRemove=new EventEmitter<number>();
  @Output() onPersonEdit=new EventEmitter<number>();


  @Input() person:{id:number, name: string, age: number, salary: number, dept: string };

  constructor() { }

  ngOnInit(){}

  remove(){  
    if(confirm('Are u sure to Remove this entry?'))
      this.onPersonRemove.emit(this.person.id);
  }


 edit(){  
      this.onPersonEdit.emit(this.person.id);
  }
}
