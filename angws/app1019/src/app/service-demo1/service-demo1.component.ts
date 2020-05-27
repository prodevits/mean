import { Component, OnInit } from '@angular/core';
import { MessageService } from '../custom/message.service';

@Component({
  selector: 'app-service-demo1',
  templateUrl: './service-demo1.component.html',
  styleUrls: ['./service-demo1.component.css']
})
export class ServiceDemo1Component implements OnInit {
  name:string;
  txt:string;
  constructor(private service:MessageService) { }

  ngOnInit() {
  }
  
  add(){
    this.service.addMessage(this.name,this.txt);
  }
}
