import { Component, OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-life-demo',
  templateUrl: './life-demo.component.html',
  styleUrls: ['./life-demo.component.css']
})
export class LifeDemoComponent implements OnInit,OnChanges,OnDestroy,DoCheck,AfterContentInit {
  data=100;
  name="Guest";
  constructor() { 
    console.log("LifeDemo Constructor : "+this.data+" ,Name="+this.name);
   
  }
  ngOnChanges(){
    console.log("LifeDemo NG Change : "+this.data+" ,Name="+this.name);
    
  }
  ngOnInit() {
    console.log("LifeDemo NG Init : "+this.data+" ,Name="+this.name);
   
  }

ngOnDestroy(){
  console.log("LifeDemo NG Destroy : "+this.data+" ,Name="+this.name);
  
}

ngDoCheck(){
  console.log("LifeDemo NG DoCheck : "+this.data+" ,Name="+this.name);
 
}
ngAfterContentInit(){
  console.log("LifeDemo NG AfterContentInit : "+this.data+" ,Name="+this.name);
 
}
ngAfterContentChecked(){
  console.log("LifeDemo NG AfterContentChecked : "+this.data+" ,Name="+this.name);
 
}
ngAfterViewInit(){
  console.log("LifeDemo NG AfterViewInit : "+this.data+" ,Name="+this.name);
 
}
ngAfterViewChecked(){
  console.log("LifeDemo NG AfterViewChecked : "+this.data+" ,Name="+this.name);
 
}
  increment(){
    console.log("LifeDemo Increment");
    this.data+=100;

  }

}
