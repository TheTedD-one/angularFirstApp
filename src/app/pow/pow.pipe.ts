import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'pow'
})

export class PowPipe implements PipeTransform {
  transform(number: number, pow: number): any {
    return Math.pow(number, pow);
  }
}
