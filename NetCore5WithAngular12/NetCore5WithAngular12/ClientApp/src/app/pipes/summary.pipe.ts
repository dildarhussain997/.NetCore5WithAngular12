import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  //limit argument os optional 
  transform(value: string, limit?: number): string {
    // if value is false/null/empty 
    if (!value) return null as any;

    //if actual limit has value then return limit else return 50
    let actualLimit = (limit) ? limit : 50;
    return value.substr(0, actualLimit) + " ...";
  }

}
