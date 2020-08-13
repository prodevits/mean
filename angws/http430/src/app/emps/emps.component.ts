import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { AppHttpService } from '../services/appHttp.service';

@Component({
  selector: 'app-emps',
  templateUrl: './emps.component.html',
  styleUrls: ['./emps.component.css']
})
export class EmpsComponent implements OnInit {
  employees:Employee[];
  constructor(private appHttpService:AppHttpService) { }
  loading=true;

  ngOnInit() {
    this.appHttpService.getEmployee().subscribe((data)=>{
      this.employees=data;
      this.loading=false;
    });
  }

}
