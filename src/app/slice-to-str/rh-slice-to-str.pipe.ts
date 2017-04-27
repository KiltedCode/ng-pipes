import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rhSliceToStr'
})
export class RhSliceToStrPipe implements PipeTransform {

  /**
   * trims a string to the first occurrence of the character or string provided.
   * if no trim string provided, trims to space.
   * @param value string to be trimmed
   * @param strToTrim value to trim to
   */
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
