import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namefilter'
})
export class NamefilterPipe implements PipeTransform {

  transform(emps: any, name: string): any {
    return emps.filter(e=> e.name.toLowerCase().indexOf(name.toLowerCase()) !=-1);
  }

}
