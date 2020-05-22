import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[bgColor]'
})
export class BgColorDirective implements OnInit {

  @Input('bgColor') color:string;

  constructor(private element:ElementRef) {  }


  ngOnInit(){
    if(this.color){
      switch(this.color){
        case 'R' :  this.element.nativeElement.style.background="#F00";
          break;
          case 'G' :  this.element.nativeElement.style.background="#0F0";
          break;
          case 'B' :  this.element.nativeElement.style.background="#00F";
          break;        
      }
    }
    
  }

}
