import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  stu_list=[{rollno:101,name:'aman'},{rollno:102,name:'suman'},{rollno:103,name:'rina'}];
  constructor() { }

  ngOnInit() {
  }

}
