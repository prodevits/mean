import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameTitle'
})
export class NameTitlePipe implements PipeTransform {

  transform(name: string, gender?: string): string {
    if (!gender)
      return name;      
    if (gender == 'male')
      return 'Mr. ' + name;
    else if (gender == 'female')
      return 'Ms. ' + name;
    else
      return name;



  }

}
