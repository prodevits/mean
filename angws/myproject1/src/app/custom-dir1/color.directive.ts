import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[color]'
})
export class ColorDirective implements OnInit {
  @Input("color") color;

  constructor(private element:ElementRef) { }

  ngOnInit(){
    
  }

}
