import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bonus'
})
export class BonusPipe implements PipeTransform {

  transform(salary:number,exp:number,gender:string): any {
    let bonus:number=0;
    if(gender=='female')
      bonus=500;

    if(exp>15)
      bonus+=salary*1.5;   //50%
    else if(exp>10)
      bonus+=salary*1.3;    //30%
    else if(exp>5)
      bonus+=salary*1.2;    //20%
    else if(exp>0)
      bonus+=salary*1.1;     //10%
    return bonus.toFixed(2);
  }

}
