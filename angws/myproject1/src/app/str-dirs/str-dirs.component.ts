import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-str-dirs',
  templateUrl: './str-dirs.component.html',
  styleUrls: ['./str-dirs.component.css']
})
export class StrDirsComponent implements OnInit {
cities=[];
cname:string;

  constructor() { }

  ngOnInit() {
  }

  addCity(){
    this.cities.push(this.cname);
  }
}
