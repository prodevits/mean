import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[mousefn]'
})
export class MousefnDirective {
  // constructor(private element:ElementRef) { }
  fontSize:string;
  // @HostListener('mouseover')
  // onMouseHover(){
  //   this.fontSize=this.element.nativeElement.style.fontSize;
  //   this.element.nativeElement.style.fontSize="50px";
  // }
  // @HostListener('mouseleave')
  // onMouseOut(){
  //   this.element.nativeElement.style.fontSize=this.fontSize;
  // }


   @HostListener('mouseover',['$event.target'])
  onMouseHover(element){
    this.fontSize=element.style.fontSize;
    element.style.fontSize="50px";
  }
  @HostListener('mouseleave',['$event.target'])
  onMouseOut(element){
    element.style.fontSize=this.fontSize;
  }


}
