import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name:'grade'})
export class GradePipe implements PipeTransform{
    transform(sal:number):string{    
        if (sal<15000)
            return "C";
        else if(sal<25000)
            return "B";
        return "A";
    }
}