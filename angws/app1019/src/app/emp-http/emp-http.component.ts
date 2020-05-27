import { Component, OnInit } from '@angular/core';
import { Employee } from './Employee';
import { EmpHttpService } from './emp-http.service';

@Component({
  selector: 'app-emp-http',
  templateUrl: './emp-http.component.html',
  styleUrls: ['./emp-http.component.css'],

})
export class EmpHttpComponent implements OnInit {
  empList:Employee[];

  constructor(private empService:EmpHttpService) { 
  this.loadEmps();
  }

loadEmps(){
this.empService.getEmps().subscribe(data => {
  this.empList=data
  this.empList.sort( (e1,e2) => e1.empid-e2.empid);
});



}
onAdd(){
  this.loadEmps();
}
add(){
  let e={empid:112,name:'Aman',city:'Akola',salary:33445};
  this.empService.addEmp(e).subscribe(data=> {
    console.log(data) 
  });

}
  ngOnInit() {
  }

}
