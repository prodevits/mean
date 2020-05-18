import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-str-dirs',
  templateUrl: './str-dirs.component.html',
  styleUrls: ['./str-dirs.component.css']
})
export class StrDirsComponent implements OnInit {
// cities=['indore','mumbai','pune'];
cities=[];
cname:string;

add(){
  this.cities.push(this.cname);
  this.cname=null;
}
  constructor() { }

  ngOnInit() {
  }

  salary:number;
  salaryList:number[]=[];

  addSalary(){
    this.salaryList.push(this.salary);
  }


}
