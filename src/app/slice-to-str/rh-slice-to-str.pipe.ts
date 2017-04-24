import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rhSliceToStr'
})
export class RhSliceToStr implements PipeTransform {

  transform(value: string, strToTrim?: string): string {
    if(!value) {
      return value;
    }
    if(strToTrim == null) {
      strToTrim = ' ';
    }
    var n = value.indexOf(strToTrim);
    if(n !== -1) {
      return value.substring(0, n);
    } else {
      return value;
    }
  }

}
