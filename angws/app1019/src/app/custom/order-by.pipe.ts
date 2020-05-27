import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(emps: any, pname: string,order:string='A' ): any {
    if(pname)
       {
        if(order=='D'){
          return  emps.sort((a,b)=>{
            if (isNaN(parseFloat(a[pname])))
                return a[pname].toLowerCase()<b[pname].toLowerCase()?1:-1;
            else
              return b[pname]-a[pname];
          });
 
        }else{
          return  emps.sort((a,b)=>{
            if (isNaN(parseFloat(a[pname])))
                return a[pname].toLowerCase()<b[pname].toLowerCase()?-1:1;
            else
              return a[pname]-b[pname];
          });
        }

    }
    
   


    return emps;
  }

}
