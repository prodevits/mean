import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[timer]'
})
export class TimerDirective implements OnInit {

  @Input("timer") time:number;

  constructor(public element:ElementRef) { }

  ngOnInit(){

    let duration=1000;
    if(this.time){
      duration=this.time*1000;
    }
  
    let t=this.time;
    let id=setInterval(()=>{
      this.element.nativeElement.innerHTML=`Hi we are going in ${t} seconds`;
      t=t-1;
    },1000);

    setTimeout(()=>{
      this.element.nativeElement.style.display='none';  
      clearInterval(id);
    },duration);
  }

}
