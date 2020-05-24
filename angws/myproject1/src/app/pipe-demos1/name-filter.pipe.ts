import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(emps:any[],name:string): any {
    if(name){
      name=name.toLocaleLowerCase();
      const nemps=emps.filter((e)=> e.name.toLowerCase().indexOf(name)>=0);
      return nemps;
    }

    return emps;
   
  }

}
