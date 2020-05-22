import { Directive, OnInit, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[hide]'
})
export class HideDirective implements OnInit {
    
  @Input('hide') duration;
  
    constructor(private element:ElementRef) {}
    ngOnInit(){
      const time=this.duration | 1000;
      setTimeout(()=>{
         this.element.nativeElement.style.display='none';
      },time) ;
    }
  }  