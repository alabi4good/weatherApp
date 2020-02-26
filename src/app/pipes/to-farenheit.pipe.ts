import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toFarenheit'
})
export class ToFarenheitPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return Math.round((value *(9/5)) + 32);
  }

}
