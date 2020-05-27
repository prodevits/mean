import { Component, OnInit } from '@angular/core';
import { MessageService } from '../custom/message.service';
import { Message } from '../models/Message.model';

@Component({
  selector: 'app-service-demo2',
  templateUrl: './service-demo2.component.html',
  styleUrls: ['./service-demo2.component.css']
})
export class ServiceDemo2Component implements OnInit {
messages:Message[];
  constructor(private service:MessageService) { }

  ngOnInit() {
    this.messages=this.service.getMessages();
  }

}
