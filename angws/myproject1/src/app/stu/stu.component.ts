import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-stu',
  templateUrl: './stu.component.html',
  styles: [`h2{color:#00F;}`,`p{background:#FF0;}`]
})
export class StuComponent {
  sname="Rohan";
  age=21;
  state="MP";
}
