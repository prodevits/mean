import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
  name:string="Rohit Singh";
  age:number=23;
  
  constructor() { }

  ngOnInit() {
  }

}
