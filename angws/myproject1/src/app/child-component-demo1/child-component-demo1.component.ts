import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-component-demo1',
  templateUrl: './child-component-demo1.component.html',
  styleUrls: ['./child-component-demo1.component.css']
})
export class ChildComponentDemo1Component implements OnInit {
  stu_list=[{rollno:101,name:'aman'},{rollno:102,name:'suman'},{rollno:103,name:'rina'}];
  constructor() { }

  ngOnInit() {
  }

}
