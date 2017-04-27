import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rhNumberPad'
})
export class RhNumberPadPipe implements PipeTransform {

  /**
   * pads a value to two spaces with leading 0s.
   * if single digit number or string of length 1, adds a 0 to front.
   * otherwise, returns as is.
   * @param value to be padded
   * @param args unused
   */
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
