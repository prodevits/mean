import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Output("newMessage") messageEvent=new EventEmitter<string>();

  msgText:string='';
  constructor() { }
  ngOnInit() {
  }

  onSubmit(){
    this.messageEvent.emit(this.msgText);
    this.msgText='';
  }

  validInput(){
    return this.msgText.trim().length>1;
  }


}
