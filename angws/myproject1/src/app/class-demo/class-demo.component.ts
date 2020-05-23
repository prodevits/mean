import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-demo',
  templateUrl: './class-demo.component.html',
  styleUrls: ['./class-demo.component.css']
})
export class ClassDemoComponent implements OnInit {

  tc=true;
  b=false;
  bgw=true;
  align='left';
  bgc='blue';
  
  constructor() { }

  ngOnInit() {
  }

}
