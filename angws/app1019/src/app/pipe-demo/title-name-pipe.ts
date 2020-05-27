
import { PipeTransform, Pipe } from "@angular/core";

@Pipe({name:'titleName'})
export class TitleNamePipe implements PipeTransform{
    transform(name:string,gender?:string):string{
        let t='';
        console.log(gender);
        
        if(gender=='male')
            t='Mr. ';
        else if(gender=='female')
            t="Ms. "
        let n=t+name;
        
        return n;
    }
}