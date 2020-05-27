import { Directive, ViewContainerRef, TemplateRef, OnInit, 
    Input, OnChanges } from "@angular/core";
@Directive({
    selector:'[myLoop]',
})
export class MyLoopDirective implements OnInit,OnChanges{
    @Input('myLoopOf') range:number[];    
    constructor(private container: ViewContainerRef ,
        private template: TemplateRef<any>){}
ngOnInit(){ }
ngOnChanges(){
    //console.log(this.range);
    let step=1;
    if(this.range.length==3)
        step=this.range[2];

    for(let i=this.range[0];i<=this.range[1];i=i+step){
     this.container.createEmbeddedView(this.template,
        {$implicit:i});
    }
}
}