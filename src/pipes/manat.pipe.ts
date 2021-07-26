import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'manat'
})
export class ManatPipe implements PipeTransform {

  transform(amount: number, symbol?: string): string {
    if (symbol == null) {
      symbol = "₼";
    }

    return `${amount} ${symbol}`;
  }

}
