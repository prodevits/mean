import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {
  persons=[{id:101,name: 'Ramesh sharma', gender:'male', age: 34,salary:45000,dept:'HR'},
  {id:104,name: 'Ronak sharma',gender:'male', age:89,salary:78000,dept:'NA'},
  {id:103,name: 'Rina', gender:'female',age:89,salary:8000,dept:'SALES'},
  {id:102,name: 'sohan singh', gender:'male',age:12,salary:12000.897,dept:'ACCOUNT'},
 {id:105,name: 'suman jain',gender:'female', age:29,salary:38000,dept:'ACCOUNT'}];

  constructor() { }

  ngOnInit() {
  }

}
