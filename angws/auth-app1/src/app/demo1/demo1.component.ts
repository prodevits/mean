import { Component, OnInit } from '@angular/core';
import { AppHttpService } from '../services/app-htpp.service';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {
  message:string;
  constructor(private appHttpService:AppHttpService) { }

  ngOnInit() {
    this.appHttpService.demo1().subscribe(data=>{
      this.message=data.message;
    });
  }

}
