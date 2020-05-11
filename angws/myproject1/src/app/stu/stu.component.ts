import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-stu',
  template: `<h2>Student Management</h2>
              <p>Name={{name}}</p>`,
  styles: [`h2{color:#00F;}`,`p{background:#FF0;}`]
})
export class StuComponent implements OnInit {
  name="Rohan";
  constructor() { }

  ngOnInit() {
  }

}
