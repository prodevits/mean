import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salaryFilter'
})
export class SalaryFilterPipe implements PipeTransform {

  transform(emps: any,sal1:number,sal2:number): any {
    if( sal1 && sal2) 
      {
        return emps.filter(
        e=> e.salary>=sal1 && e.salary<=sal2
      );
    }    
    return emps;
    }

}
