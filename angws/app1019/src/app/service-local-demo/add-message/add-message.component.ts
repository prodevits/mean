import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.css']
})
export class AddMessageComponent implements OnInit {
  message:string;
  constructor(private msgService:MessageService) { }

  ngOnInit() {
  }

  addMessage(){
    this.msgService.add(this.message);
  }

}
