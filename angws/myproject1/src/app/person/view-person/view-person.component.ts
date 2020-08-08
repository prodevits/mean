import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: '.app-view-person',
  templateUrl: './view-person.component.html',
  styleUrls: ['./view-person.component.css']
})
export class ViewPersonComponent implements OnInit {
  @Input() person;
  @Output("removePerson") removePersonEvent=new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  remove(){
    this.removePersonEvent.emit(this.person.id);
  }
}
