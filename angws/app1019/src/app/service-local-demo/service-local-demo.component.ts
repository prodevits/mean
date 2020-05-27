import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-service-local-demo',
  templateUrl: './service-local-demo.component.html',
  styleUrls: ['./service-local-demo.component.css'],
  providers: [MessageService]
})
export class ServiceLocalDemoComponent implements OnInit {
  messages = [];
  constructor(private msgService: MessageService) {
    this.messages = msgService.getAll();
    msgService.onMessageAdd.subscribe((data)=>{
      this.messages=data;
    });
  }

  ngOnInit() {
  }


}
