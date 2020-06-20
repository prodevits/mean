import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lc-demo2',
  templateUrl: './lc-demo2.component.html',
  styleUrls: ['./lc-demo2.component.css']
})
export class LcDemo2Component implements OnInit {
  message="Hello";
  showChild = true;
  
  constructor() { }
  
  ngOnInit() { }
  
  doSome(m) {
  this.message = m;
  }
  
  toggleChild() {
  this.showChild = !this.showChild;
  }
  
  }
  