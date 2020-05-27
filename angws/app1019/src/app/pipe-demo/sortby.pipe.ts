import { PipeTransform, Pipe } from "@angular/core";

@Pipe({name:'sortBy'})
export class SortByPipe implements PipeTransform{
    transform(persons:any):any{
        const p=persons.sort(function(a,b){
            return a.id-b.id;
        });
        return p;
    }
}