import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name:"exlevel"})
export class Explevel implements PipeTransform{

    transform(data:number):string{
        if(data==0)
            return "FRESHER";
        else if(data<=2)
            return "JUNIOR";
        else if(data<=10)
            return "SENIOR";
        else
            return "EXPERT";
    }
}