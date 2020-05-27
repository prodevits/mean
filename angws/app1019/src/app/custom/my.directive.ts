import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[myDir]'
})
export class MyDirective {

  constructor(private element:ElementRef) { 
    console.log("My Dir Constructor");
    element.nativeElement.style.background='#0FF';
    
  }

}
