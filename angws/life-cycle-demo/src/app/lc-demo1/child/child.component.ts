import { Component, OnInit, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() data;
  constructor() {
    console.log("   Child - Constructor : "+this.data);
   
   }

  ngOnInit() {
    console.log("   Child - NG Init : "+this.data);
   
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("   Child - NG Change : "+this.data);    
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(`   Child - ${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  
     
  }
  ngOnDestroy(){
    console.log("   Child - NG Destroy : "+this.data);
    
  }
  ngDoCheck(){
    console.log("   Child - NG DoCheck : "+this.data);
   
  }
  ngAfterContentInit(){
    console.log("   Child - NG AfterContentInit : "+this.data);
   
  }
  ngAfterContentChecked(){
    console.log("   Child - NG AfterContentChecked : "+this.data);
   
  }
  ngAfterViewInit(){
    console.log("   Child - NG AfterViewInit : "+this.data);
   
  }
  ngAfterViewChecked(){
    console.log("   Child - NG AfterViewChecked : "+this.data);
   
  }
  
}
