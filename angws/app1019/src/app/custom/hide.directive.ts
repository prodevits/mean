import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[hide]'
})
export class HideDirective implements OnInit {
    @Input('hide') duration;
  constructor(private element:ElementRef) {    
  }
  ngOnInit(){
    console.log('hide directive : '+this.duration);
    const time=this.duration | 1000;
    let t=parseInt((time/1000).toString());
    let m=this.element.nativeElement.innerHTML;
    const id=setInterval(()=>{
        // console.log(t);        
        this.element.nativeElement.innerHTML=m+' <span class="label label-danger"> Going in '+t+ " seconds...</span>";
        t=t-1;
        if(t<0){
            this.element.nativeElement.style.display='none';
            clearInterval(id);

        }
    },1000);
//    setTimeout(()=>{
//       this.element.nativeElement.style.display='none';
//    },time) ;
  }
}
