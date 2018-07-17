import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'appPow',
    pure: false,
})

export class PowPipe implements PipeTransform {
    transform(value: any, powNumber: number = 2, symbol: string) {
        return symbol + Math.pow(value, powNumber);
    }
}