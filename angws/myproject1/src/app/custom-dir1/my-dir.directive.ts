import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[myDir]'
})

export class MyDirDirective implements OnInit{  
  constructor(private element:ElementRef) { 
    element.nativeElement.style.background="#F00";
    element.nativeElement.style.color="#FFF";      
  }
  ngOnInit(){
    var t= this.element.nativeElement.innerHTML;
    console.log(t);    
    this.element.nativeElement.innerHTML=t+":"+t+":"+t;
  }
  
}
