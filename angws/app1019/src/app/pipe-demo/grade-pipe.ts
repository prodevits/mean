import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name:'grade'
})
export class GradePipe implements PipeTransform{
    transform(sal):string{
        if (sal<10000)
        return "C";
        else if(sal<20000)
        return "B";

        return "A";
    }
}