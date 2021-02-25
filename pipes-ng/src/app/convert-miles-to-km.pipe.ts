import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertMilesToKm'
})
export class ConvertMilesToKmPipe implements PipeTransform {

  transform(value: number, floatingPointDirection: string, changeUnitsBy: number): unknown {
    if (!value) {
      return '';
    }
    switch(floatingPointDirection) {
      case '*':
        return value * 1.60934 * changeUnitsBy;
        break;
      default:
        return value * 1.60934;
    }
  }

}
