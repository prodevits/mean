import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-component-demo2',
  templateUrl: './child-component-demo2.component.html',
  styleUrls: ['./child-component-demo2.component.css']
})
export class ChildComponentDemo2Component implements OnInit {
  msgList=[];
  constructor() { }

  ngOnInit() {
  }

  onMessage(msgText:string){
    this.msgList.push(msgText);
   
  }


}
