import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {


  transform(pemps: any[], fieldName: string,order?:string): any {
    const emps=[...pemps];    //copy
    if (fieldName && emps.length>0) {
      if(!order || order=='asc'){
        if (isNaN(emps[0][fieldName])) {
          emps.sort((a, b) => a[fieldName].toLowerCase().localeCompare(b[fieldName].toLowerCase()));
        } else {
          emps.sort((a, b) => a[fieldName] < b[fieldName] ? -1 : 1);
        }
      }else if(order=='desc'){
        if (isNaN(emps[0][fieldName])) {
          emps.sort((b,a) => a[fieldName].toLowerCase().localeCompare(b[fieldName].toLowerCase()));
        } else {
          emps.sort((b,a) => a[fieldName] < b[fieldName] ? -1 : 1);
        }
      }
      
    }   
    return emps;
  }
}
