import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rhNumberPad'
})
export class RhNumberPadPipe implements PipeTransform {

  transform(value: any, args?: any): string {
    let paddedVal: string = '00';
    if(value != null) {
      if(typeof value == 'number') {
        if(+value < 10) {
          paddedVal = '0' + value;
        } else {
          paddedVal = '' + value;;
        }
      } else {
        if(value.length == 1) {
          paddedVal = '0' + value;
        } else if(value.length > 1) {
          paddedVal = value;
        }
      }
    }
    return paddedVal;
  }

}
