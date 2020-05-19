import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'max'
})
export class MaxPipe implements PipeTransform {

  transform(emps:any[]): any {
    const m=emps.reduce((a,b)=> a.salary>b.salary?a:b );
    return m;
  }

}
