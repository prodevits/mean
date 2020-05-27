import { Component, OnInit } from '@angular/core';
import { BasicService } from '../service/basic.service';
import { SecondService } from '../custom/second.service';

@Component({
  selector: 'app-service-basic',
  templateUrl: './service-basic.component.html',
  styleUrls: ['./service-basic.component.css']
})
export class ServiceBasicComponent implements OnInit {

  constructor(private basicService:SecondService) { }

  ngOnInit() {
    console.log(this.basicService);    
  }

  getData(){
    return this.basicService.getAllData();
  }
}
