import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demos1',
  templateUrl: './pipe-demos1.component.html',
  styleUrls: ['./pipe-demos1.component.css']
})
export class PipeDemos1Component implements OnInit {
  emps=[
    {empid:101,name:'Raman',gender:'male',city:'indore',salary:27000,dob:'1989-11-23',experience:12},
    {empid:106,name:'Reena',gender:'female',city:'pune',salary:22500,dob:'1994-03-12',experience:5},
    {empid:102,name:'Sunil',gender:'male',city:'indore',salary:12000,dob:'2001-01-21',experience:3},
    {empid:105,name:'Ganesh',gender:'male',city:'mumbai',salary:45000,dob:'1971-12-05',experience:16},
    {empid:103,name:'ankita',gender:'female',city:'akola',salary:29000,dob:'2003-06-18',experience:0},
    {empid:104,name:'aman',gender:'male',city:'bhopal',salary:29000,dob:'2001-10-11',experience:0}
  ];

fn='empid';
  constructor() { }
  ngOnInit() {
  }

}
