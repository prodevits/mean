import { Component, OnInit, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-demo-child',
  templateUrl: './demo-child.component.html',
  styleUrls: ['./demo-child.component.css']
})
export class DemoChildComponent implements OnInit {

  @Input('text-msg') txt_msg: string;

  name = "raman";

  constructor() {
  console.log("In Child - constructor ...");
  }

  ngOnInit() {
  console.log("In Child - onInIt...");
  }
  ngOnChanges(changes: SimpleChanges) {
  console.log("in Child - onChanges...");
  console.log(changes);
  const inputChange=changes['txt_msg'];
  console.log("In Child - Input Previous value :"+inputChange.previousValue);
  console.log("In Child - Input Current value :"+inputChange.currentValue);
  console.log("In Child - IS First Chang in input :"+inputChange.firstChange);
  
  
  }

  ngDoCheck() {
  console.log("In child - doCheck...");
  }

  ngAfterContentInit() {
  console.log("In child - AfterContentInit");
  }

  ngAfterContentChecked() {
  console.log("In child - AfterContentChecked");
  }

  ngAfterViewInit() {
  console.log("In child - AfterViewInit");
  }

  ngAfterViewChecked() {
  console.log("In child - AfterViewChecked");
  }
  
  ngOnDestroy() {
  console.log("In child - Destroy");
  }
  m1() {
  this.name = "aman";
  }
  

}
