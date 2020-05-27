import { Component, OnInit, OnChanges } from '@angular/core';
import {LoggingService} from '../logging.service'
@Component({
  selector: 'app-number-opr',
  templateUrl: './number-opr.component.html',
  styleUrls: ['./number-opr.component.css']
})
export class NumberOprComponent implements OnInit ,OnChanges{
  logService:LoggingService=new LoggingService();
output:number;
opr:string;
selOprs:any;
oprs=['add','sub','mul','div','power'];
dd=false;
constructor() { }

ngOnInit() {
}

ngOnChanges(){
  console.log("Change Found : ");
  console.log("Opr="+this.opr);
  console.log("Selected Opr="+this.selOprs);  
}
add(a:number,b:number,opr?:any){
  this.output=a+b;
  this.logService.logStatusChange("opr="+this.opr);
  this.dd=true;
}


}
