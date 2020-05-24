import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(emps: any[],fieldName:string): any {

    if( fieldName=='empid'){
        emps.sort((a,b)=>a.empid-b.empid);
      return emps;
    }else if(fieldName=='name'){
      emps.sort((a,b)=> a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
      return emps;
    }





  //   emps.sort((a,b)=> a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
  // // emps.sort((a,b)=>a.empid-b.empid);
  //   return emps;
  }
}
