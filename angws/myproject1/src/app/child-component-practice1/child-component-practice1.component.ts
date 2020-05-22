import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-component-practice1',
  templateUrl: './child-component-practice1.component.html',
  styleUrls: ['./child-component-practice1.component.css']
})
export class ChildComponentPractice1Component implements OnInit {
itemList=[{id:10921,name:'Samsung Mobile SE1234',price:78256.23,qty:1},
{id:77825,name:'Park Avenue Deo',price:299.00,qty:2},
{id:17890,name:'Luxer Gel Pen',price:24.99,qty:10}
];
  constructor() { }

  ngOnInit() {
  }

}
