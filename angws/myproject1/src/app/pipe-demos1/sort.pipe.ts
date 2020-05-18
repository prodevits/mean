import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(emps: any[]): any {
    emps.sort((a,b)=> a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    return emps;
  }

}
