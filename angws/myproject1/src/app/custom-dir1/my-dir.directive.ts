import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[myDir]'
})
export class MyDirDirective {
  constructor(element:ElementRef) { 
    element.nativeElement.style.background="#F00";
    element.nativeElement.style.color="#FFF";
    
  }
}
