import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(emps:any[],searchData:string): any {
    if(searchData){
      searchData=searchData.trim().toLocaleLowerCase();
      const nemps=emps.filter((e)=> e.name.toLowerCase().indexOf(searchData)>=0 || e.city.toLowerCase().indexOf(searchData)>=0)
      return nemps;
    }
    return emps;   
  }


}
